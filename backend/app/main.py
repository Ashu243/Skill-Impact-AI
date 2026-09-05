from dotenv import load_dotenv

import csv
import io

load_dotenv()

from fastapi import FastAPI, UploadFile, File
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from app.supabase import supabase


app = FastAPI(title="Skill Impact AI API")

class OutcomeVerification(BaseModel):
    verification_source: str

# =========================================================
# CORS
# =========================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# =========================================================
# ROOT
# =========================================================

@app.get("/")
def root():
    return {
        "message": "Skill Impact AI Backend is running!"
    }


# =========================================================
# HEALTH CHECK
# =========================================================

@app.get("/api/health")
def health():
    return {
        "status": "ok"
    }


# =========================================================
# SUPABASE TEST
# =========================================================

@app.get("/api/supabase-test")
def supabase_test():
    return {
        "message": "Supabase connected successfully!"
    }


# =========================================================
# GET ALL CANDIDATES
# =========================================================

@app.get("/api/candidates")
def get_candidates():

    try:

        response = (
            supabase
            .table("candidates")
            .select("*")
            .execute()
        )

        return {
            "success": True,
            "data": response.data
        }

    except Exception as e:

        return {
            "success": False,
            "error": str(e)
        }


# =========================================================
# GET SINGLE CANDIDATE
# =========================================================

@app.get("/api/candidates/{candidate_id}")
def get_candidate(candidate_id: str):

    try:

        response = (
            supabase
            .table("candidates")
            .select("*")
            .eq("candidate_id", candidate_id)
            .single()
            .execute()
        )

        return {
            "success": True,
            "data": response.data
        }

    except Exception as e:

        return {
            "success": False,
            "error": str(e)
        }


# =========================================================
# GET EMPLOYMENT OUTCOMES
# =========================================================

@app.get("/api/outcomes")
def get_outcomes():

    try:

        # Get outcome records
        outcomes_response = (
            supabase
            .table("outcomes")
            .select("*")
            .execute()
        )

        outcomes = outcomes_response.data or []

        # Get candidates so we can connect the
        # outcome's database ID with the candidate_id/name.
        candidates_response = (
            supabase
            .table("candidates")
            .select("*")
            .execute()
        )

        candidates = candidates_response.data or []

        # Create lookup:
        # candidates.id -> candidate record
        candidate_lookup = {
            candidate["id"]: candidate
            for candidate in candidates
        }

        results = []

        for outcome in outcomes:

            candidate = candidate_lookup.get(
                outcome.get("candidate_id")
            )

            results.append({
                "outcome_id": outcome.get("id"),

                "candidate_id": (
                    candidate.get("candidate_id")
                    if candidate
                    else None
                ),

                "candidate_name": (
                    candidate.get("name")
                    if candidate
                    else "Unknown Candidate"
                ),

                "course": (
                    candidate.get("course")
                    if candidate
                    else None
                ),

                "candidate_status": (
                    candidate.get("status")
                    if candidate
                    else None
                ),

                "employment_status": outcome.get(
                    "employment_status"
                ),

                "employer_name": outcome.get(
                    "employer_name"
                ),

                "job_title": outcome.get(
                    "job_title"
                ),

                "salary": outcome.get(
                    "salary"
                ),

                "employment_date": outcome.get(
                    "employment_date"
                ),

                "retention_months": outcome.get(
                    "retention_months"
                ),

                "verified": outcome.get(
                    "verified"
                ),

                "verification_source": outcome.get(
                    "verification_source"
                ),

                "created_at": outcome.get(
                    "created_at"
                ),
            })

        return {
            "success": True,
            "total": len(results),
            "data": results
        }

    except Exception as e:

        return {
            "success": False,
            "error": str(e)
        }

# =========================================================
# VERIFY EMPLOYMENT OUTCOME
# =========================================================

@app.patch("/api/outcomes/{outcome_id}/verify")
def verify_outcome(
    outcome_id: int,
    verification: OutcomeVerification
):
    try:

        response = (
            supabase
            .table("outcomes")
            .update({
                "verified": True,
                "verification_source": verification.verification_source,
            })
            .eq("id", outcome_id)
            .execute()
        )

        if not response.data:
            return {
                "success": False,
                "error": "Outcome record not found"
            }

        return {
            "success": True,
            "message": "Employment outcome verified successfully",
            "data": response.data[0]
        }

    except Exception as e:

        return {
            "success": False,
            "error": str(e)
        }


# =========================================================
# DASHBOARD
# =========================================================

@app.get("/api/dashboard")
def get_dashboard():

    try:

        response = (
            supabase
            .table("candidates")
            .select("*")
            .execute()
        )

        candidates = response.data or []

        total = len(candidates)

        employed = sum(
            1
            for candidate in candidates
            if candidate.get("status") == "Employed"
        )

        employment_rate = (
            round((employed / total) * 100, 1)
            if total > 0
            else 0
        )

        job_relevance = (
            round(
                sum(
                    candidate.get(
                        "job_relevance",
                        0
                    ) or 0
                    for candidate in candidates
                ) / total,
                1
            )
            if total > 0
            else 0
        )

        retention_rate = (
            round(
                sum(
                    candidate.get(
                        "retention_rate",
                        0
                    ) or 0
                    for candidate in candidates
                ) / total,
                1
            )
            if total > 0
            else 0
        )

        impact_score = (
            round(
                sum(
                    candidate.get(
                        "impact_score",
                        0
                    ) or 0
                    for candidate in candidates
                ) / total,
                1
            )
            if total > 0
            else 0
        )

        # -------------------------------------------------
        # Course performance
        # -------------------------------------------------

        course_data = {}

        for candidate in candidates:

            course = candidate.get(
                "course",
                "Unknown"
            )

            if course not in course_data:

                course_data[course] = {
                    "total": 0,
                    "employed": 0,
                    "impact": 0,
                }

            course_data[course]["total"] += 1

            course_data[course]["impact"] += (
                candidate.get(
                    "impact_score",
                    0
                ) or 0
            )

            if candidate.get("status") == "Employed":

                course_data[course]["employed"] += 1

        top_courses = []

        for course, data in course_data.items():

            employment = (
                round(
                    (
                        data["employed"]
                        / data["total"]
                    ) * 100,
                    1
                )
                if data["total"] > 0
                else 0
            )

            impact = (
                round(
                    data["impact"]
                    / data["total"],
                    1
                )
                if data["total"] > 0
                else 0
            )

            top_courses.append({
                "course": course,
                "employment": employment,
                "impact": impact,
                "candidates": data["total"],
            })

        top_courses.sort(
            key=lambda x: x["employment"],
            reverse=True
        )

        return {
            "success": True,

            "stats": {
                "totalCandidates": total,
                "employmentRate": employment_rate,
                "jobRelevance": job_relevance,
                "retentionRate": retention_rate,
                "impactScore": impact_score,
            },

            "topCourses": top_courses,
        }

    except Exception as e:

        return {
            "success": False,
            "error": str(e)
        }


# =========================================================
# RISK DETECTION
# =========================================================

@app.get("/api/risk-detection")
def get_risk_detection():
    try:
        response = (
            supabase.table("candidates")
            .select("*")
            .execute()
        )

        candidates = response.data or []
        result = []

        for candidate in candidates:
            job_relevance = float(
                candidate.get("job_relevance") or 0
            )

            retention = float(
                candidate.get("retention_rate") or 0
            )

            impact = float(
                candidate.get("impact_score") or 0
            )

            income_growth = float(
                candidate.get("income_growth") or 0
            )

            status = candidate.get("status") or ""

            # -------------------------------------------------
            # 1. Employment Risk
            # -------------------------------------------------

            if status == "Seeking Job":
                employment_risk = 90
            elif status == "Job Mismatch":
                employment_risk = 80
            elif status == "Employed":
                employment_risk = 15
            else:
                employment_risk = 50

            # -------------------------------------------------
            # 2. Retention Risk
            # -------------------------------------------------

            retention_risk = round(
                max(0, min(100, 100 - retention)),
                1
            )

            # -------------------------------------------------
            # 3. Skill Mismatch Risk
            # -------------------------------------------------

            skill_mismatch_risk = round(
                max(0, min(100, 100 - job_relevance)),
                1
            )

            # -------------------------------------------------
            # 4. Impact Risk
            # -------------------------------------------------

            impact_risk = round(
                max(0, min(100, 100 - impact)),
                1
            )

            # -------------------------------------------------
            # 5. Income Risk
            # -------------------------------------------------

            income_risk = round(
                max(
                    0,
                    min(
                        100,
                        100 - (income_growth * 2)
                    )
                ),
                1
            )

            # -------------------------------------------------
            # Overall Risk
            # -------------------------------------------------

            overall_risk = round(
                (
                    employment_risk * 0.30
                    + retention_risk * 0.25
                    + skill_mismatch_risk * 0.20
                    + impact_risk * 0.20
                    + income_risk * 0.05
                ),
                1
            )

            # -------------------------------------------------
            # Risk Level
            # -------------------------------------------------

            if overall_risk >= 70:
                risk_level = "High"
            elif overall_risk >= 40:
                risk_level = "Medium"
            else:
                risk_level = "Low"

            # -------------------------------------------------
            # Main Risk Factors
            # -------------------------------------------------

            risk_factors = []

            if employment_risk >= 70:
                risk_factors.append(
                    "Employment outcome risk"
                )

            if retention_risk >= 50:
                risk_factors.append(
                    "Low employment retention"
                )

            if skill_mismatch_risk >= 50:
                risk_factors.append(
                    "Skill-job mismatch"
                )

            if impact_risk >= 50:
                risk_factors.append(
                    "Low overall impact"
                )

            if income_risk >= 50:
                risk_factors.append(
                    "Low income growth"
                )

            if not risk_factors:
                risk_factors.append(
                    "No major risk factor detected"
                )

            # -------------------------------------------------
            # Recommended Intervention
            # -------------------------------------------------

            interventions = []

            if employment_risk >= 70:
                interventions.append(
                    "Connect candidate with relevant job opportunities"
                )

            if skill_mismatch_risk >= 50:
                interventions.append(
                    "Provide additional job-aligned skill training"
                )

            if retention_risk >= 50:
                interventions.append(
                    "Start structured post-placement follow-up"
                )

            if impact_risk >= 50:
                interventions.append(
                    "Review employment outcome and provide targeted support"
                )

            if income_risk >= 50:
                interventions.append(
                    "Provide career progression and wage-improvement support"
                )

            if not interventions:
                interventions.append(
                    "Continue regular outcome monitoring"
                )

            result.append({
                "candidate_id": candidate.get(
                    "candidate_id"
                ),

                "candidate_name": candidate.get(
                    "name"
                ),

                "course": candidate.get(
                    "course"
                ),

                "status": status,

                "risk_level": risk_level,

                "risk_probability": overall_risk,

                "risk_points": round(
                    overall_risk
                ),

                "employment_risk": employment_risk,

                "retention_risk": retention_risk,

                "skill_mismatch_risk": skill_mismatch_risk,

                "impact_risk": impact_risk,

                "income_risk": income_risk,

                "risk_factors": risk_factors,

                "recommended_interventions":
                    interventions,

                "job_relevance": job_relevance,

                "retention_rate": retention,

                "impact_score": impact,

                "income_growth": income_growth,
            })

        # Highest risk candidates first
        result.sort(
            key=lambda item: item[
                "risk_probability"
            ],
            reverse=True
        )

        return {
            "success": True,
            "total": len(result),
            "data": result,
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e),
        }

@app.get("/api/analytics/training-centres")
def get_training_centre_analytics():
    try:
        centres_response = (
            supabase
            .table("training_centres")
            .select("*")
            .execute()
        )

        centres = centres_response.data or []

        result = []

        for centre in centres:
            result.append({
                "name": centre.get("name"),
                "employment_rate": float(
                    centre.get("employment_rate") or 0
                ),
                "retention_rate": float(
                    centre.get("retention_rate") or 0
                ),
                "total_candidates": int(
                    centre.get("total_candidates") or 0
                ),
            })

        return {
            "success": True,
            "data": result
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }

@app.get("/api/analytics/skill-gaps")
def get_skill_gaps():
    try:
        response = (
            supabase
            .table("candidates")
            .select("course,job_relevance,retention_rate,impact_score")
            .execute()
        )

        candidates = response.data or []

        course_data = {}

        for candidate in candidates:
            course = candidate.get("course") or "Unknown"

            if course not in course_data:
                course_data[course] = {
                    "job_relevance": [],
                    "retention_rate": [],
                    "impact_score": [],
                }

            course_data[course]["job_relevance"].append(
                float(candidate.get("job_relevance") or 0)
            )

            course_data[course]["retention_rate"].append(
                float(candidate.get("retention_rate") or 0)
            )

            course_data[course]["impact_score"].append(
                float(candidate.get("impact_score") or 0)
            )

        result = []

        for course, values in course_data.items():

            relevance = sum(values["job_relevance"]) / len(values["job_relevance"])
            retention = sum(values["retention_rate"]) / len(values["retention_rate"])
            impact = sum(values["impact_score"]) / len(values["impact_score"])

            gap_score = round(
                (relevance + retention + impact) / 3,
                1
            )

            if gap_score < 50:
                status = "High Gap"
            elif gap_score < 70:
                status = "Moderate Gap"
            else:
                status = "Low Gap"

            result.append({
                "course": course,
                "job_relevance": round(relevance, 1),
                "retention_rate": round(retention, 1),
                "impact_score": round(impact, 1),
                "gap_score": gap_score,
                "status": status,
            })

        return {
            "success": True,
            "data": result
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }

@app.get("/api/recommendations")
def get_recommendations():
    try:
        candidates_response = (
            supabase
            .table("candidates")
            .select("*")
            .execute()
        )

        candidates = candidates_response.data or []

        recommendations = []

        for candidate in candidates:
            job_relevance = float(
                candidate.get("job_relevance") or 0
            )

            retention = float(
                candidate.get("retention_rate") or 0
            )

            impact = float(
                candidate.get("impact_score") or 0
            )

            status = candidate.get("status") or ""

            actions = []

            if job_relevance < 50:
                actions.append(
                    "Provide job-aligned technical skill training"
                )
            elif job_relevance < 70:
                actions.append(
                    "Strengthen practical job-oriented training"
                )

            if retention < 50:
                actions.append(
                    "Start employment retention follow-up"
                )
            elif retention < 70:
                actions.append(
                    "Increase post-placement follow-up"
                )

            if impact < 50:
                actions.append(
                    "Review candidate outcome and provide targeted support"
                )
            elif impact < 70:
                actions.append(
                    "Monitor candidate progress closely"
                )

            if status in ["Seeking Job", "Job Mismatch"]:
                actions.append(
                    "Connect candidate with relevant job opportunities"
                )

            if not actions:
                actions.append(
                    "Continue regular outcome monitoring"
                )

            if len(actions) >= 3:
                priority = "High"
            elif len(actions) == 2:
                priority = "Medium"
            else:
                priority = "Low"

            recommendations.append({
                "candidate_id": candidate.get("candidate_id"),
                "candidate_name": candidate.get("name"),
                "course": candidate.get("course"),
                "risk_level": candidate.get("risk_level"),
                "priority": priority,
                "job_relevance": job_relevance,
                "retention_rate": retention,
                "impact_score": impact,
                "actions": actions,
            })

        return {
            "success": True,
            "data": recommendations
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }

@app.get("/api/ai-insights/{candidate_id}")
def get_candidate_ai_insight(candidate_id: str):
    try:
        response = (
            supabase.table("candidates")
            .select("*")
            .eq("candidate_id", candidate_id)
            .single()
            .execute()
        )

        candidate = response.data

        if not candidate:
            return {
                "success": False,
                "error": "Candidate not found"
            }

        job_relevance = float(candidate.get("job_relevance") or 0)
        retention = float(candidate.get("retention_rate") or 0)
        impact = float(candidate.get("impact_score") or 0)
        status = candidate.get("status") or "Unknown"

        reasons = []
        actions = []

        # Job relevance analysis
        if job_relevance < 50:
            reasons.append(
                "The candidate's current employment outcome has low job relevance."
            )
            actions.append(
                "Provide additional job-aligned technical training."
            )
        elif job_relevance < 70:
            reasons.append(
                "Job relevance is moderate and may require stronger practical alignment."
            )
            actions.append(
                "Increase practical and industry-oriented training."
            )

        # Retention analysis
        if retention < 50:
            reasons.append(
                "The candidate shows a low employment retention indicator."
            )
            actions.append(
                "Start structured post-placement follow-up."
            )
        elif retention < 70:
            reasons.append(
                "Retention is moderate and should be monitored."
            )
            actions.append(
                "Increase post-placement support and follow-up."
            )

        # Impact analysis
        if impact < 50:
            reasons.append(
                "Overall employment impact is currently low."
            )
            actions.append(
                "Review the candidate's employment outcome and provide targeted support."
            )
        elif impact < 70:
            reasons.append(
                "Overall impact is moderate."
            )
            actions.append(
                "Monitor progress and provide additional career support."
            )

        # Employment status
        if status in ["Seeking Job", "Job Mismatch"]:
            reasons.append(
                "The candidate is not currently in a suitable employment outcome."
            )
            actions.append(
                "Connect the candidate with relevant job opportunities."
            )

        # Overall assessment
        weak_indicators = sum([
            job_relevance < 50,
            retention < 50,
            impact < 50,
            status in ["Seeking Job", "Job Mismatch"]
        ])

        if weak_indicators >= 3:
            priority = "Critical"
            summary = (
                "Immediate intervention is recommended because multiple "
                "employment outcome indicators are weak."
            )
        elif weak_indicators >= 2:
            priority = "High"
            summary = (
                "The candidate requires priority intervention due to "
                "multiple weak outcome indicators."
            )
        elif weak_indicators == 1:
            priority = "Medium"
            summary = (
                "The candidate has one significant weakness that should "
                "be addressed through targeted support."
            )
        else:
            priority = "Low"
            summary = (
                "The candidate's current outcome indicators are relatively stable."
            )

        return {
            "success": True,
            "data": {
                "candidate_id": candidate.get("candidate_id"),
                "candidate_name": candidate.get("name"),
                "course": candidate.get("course"),
                "priority": priority,
                "summary": summary,
                "reasons": reasons,
                "actions": actions,
                "metrics": {
                    "job_relevance": job_relevance,
                    "retention_rate": retention,
                    "impact_score": impact
                }
            }
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }

@app.get("/api/analytics/training-centres/{centre_name}/courses")
def get_training_centre_courses(centre_name: str):
    try:
        decoded_name = centre_name

        # Find the training centre
        centre_response = (
            supabase.table("training_centres")
            .select("id,name")
            .eq("name", decoded_name)
            .limit(1)
            .execute()
        )

        centres = centre_response.data or []

        if not centres:
            return {
                "success": False,
                "error": "Training centre not found"
            }

        centre = centres[0]
        centre_id = centre["id"]

        # Get candidates belonging to this centre
        candidates_response = (
            supabase.table("candidates")
            .select(
                "course,job_relevance,retention_rate,impact_score,status"
            )
            .eq("training_centre_id", centre_id)
            .execute()
        )

        candidates = candidates_response.data or []

        course_data = {}

        for candidate in candidates:
            course = candidate.get("course") or "Unknown"

            if course not in course_data:
                course_data[course] = {
                    "job_relevance": [],
                    "retention_rate": [],
                    "impact_score": [],
                    "candidates": 0,
                    "employed": 0,
                }

            course_data[course]["job_relevance"].append(
                float(candidate.get("job_relevance") or 0)
            )

            course_data[course]["retention_rate"].append(
                float(candidate.get("retention_rate") or 0)
            )

            course_data[course]["impact_score"].append(
                float(candidate.get("impact_score") or 0)
            )

            course_data[course]["candidates"] += 1

            if candidate.get("status") == "Employed":
                course_data[course]["employed"] += 1

        result = []

        for course, values in course_data.items():

            count = values["candidates"]

            relevance = (
                sum(values["job_relevance"]) / count
                if count else 0
            )

            retention = (
                sum(values["retention_rate"]) / count
                if count else 0
            )

            impact = (
                sum(values["impact_score"]) / count
                if count else 0
            )

            employment_rate = (
                values["employed"] / count * 100
                if count else 0
            )

            performance_score = (
                relevance + retention + impact
            ) / 3

            if performance_score >= 75:
                status = "Strong"
            elif performance_score >= 60:
                status = "Moderate"
            else:
                status = "Needs Attention"

            result.append({
                "course": course,
                "candidates": count,
                "employment_rate": round(employment_rate, 1),
                "job_relevance": round(relevance, 1),
                "retention_rate": round(retention, 1),
                "impact_score": round(impact, 1),
                "performance_score": round(
                    performance_score, 1
                ),
                "status": status,
            })

        result.sort(
            key=lambda item: item["performance_score"],
            reverse=True
        )

        return {
            "success": True,
            "centre": centre["name"],
            "data": result
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }

@app.get("/api/analytics/training-centres/{centre_name}/skill-gaps")
def get_training_centre_skill_gaps(centre_name: str):
    try:
        # Find centre
        centre_response = (
            supabase.table("training_centres")
            .select("id,name")
            .eq("name", centre_name)
            .limit(1)
            .execute()
        )

        centres = centre_response.data or []

        if not centres:
            return {
                "success": False,
                "error": "Training centre not found"
            }

        centre = centres[0]

        # Get candidate outcome indicators
        candidate_response = (
            supabase.table("candidates")
            .select(
                "course,job_relevance,retention_rate,impact_score,status"
            )
            .eq("training_centre_id", centre["id"])
            .execute()
        )

        candidates = candidate_response.data or []

        course_data = {}

        for candidate in candidates:
            course = candidate.get("course") or "Unknown"

            if course not in course_data:
                course_data[course] = {
                    "job_relevance": [],
                    "retention_rate": [],
                    "impact_score": [],
                    "seeking_job": 0,
                    "total": 0,
                }

            data = course_data[course]

            data["job_relevance"].append(
                float(candidate.get("job_relevance") or 0)
            )

            data["retention_rate"].append(
                float(candidate.get("retention_rate") or 0)
            )

            data["impact_score"].append(
                float(candidate.get("impact_score") or 0)
            )

            data["total"] += 1

            if candidate.get("status") in [
                "Seeking Job",
                "Job Mismatch"
            ]:
                data["seeking_job"] += 1

        result = []

        for course, data in course_data.items():

            total = data["total"]

            relevance = (
                sum(data["job_relevance"]) / total
                if total else 0
            )

            retention = (
                sum(data["retention_rate"]) / total
                if total else 0
            )

            impact = (
                sum(data["impact_score"]) / total
                if total else 0
            )

            # Calculate gap indicators
            relevance_gap = round(100 - relevance, 1)
            retention_gap = round(100 - retention, 1)
            impact_gap = round(100 - impact, 1)

            overall_gap = round(
                (
                    relevance_gap
                    + retention_gap
                    + impact_gap
                ) / 3,
                1
            )

            if overall_gap >= 50:
                gap_level = "High"
            elif overall_gap >= 30:
                gap_level = "Moderate"
            else:
                gap_level = "Low"

            recommendations = []

            if relevance < 70:
                recommendations.append(
                    "Improve industry and job-aligned practical skills"
                )

            if retention < 70:
                recommendations.append(
                    "Strengthen post-placement support"
                )

            if impact < 70:
                recommendations.append(
                    "Review training effectiveness and employment outcomes"
                )

            if data["seeking_job"] > 0:
                recommendations.append(
                    "Increase placement opportunities for job-seeking candidates"
                )

            if not recommendations:
                recommendations.append(
                    "Continue monitoring current training outcomes"
                )

            result.append({
                "course": course,
                "job_relevance": round(relevance, 1),
                "retention_rate": round(retention, 1),
                "impact_score": round(impact, 1),
                "relevance_gap": relevance_gap,
                "retention_gap": retention_gap,
                "impact_gap": impact_gap,
                "overall_gap": overall_gap,
                "gap_level": gap_level,
                "job_seekers": data["seeking_job"],
                "recommendations": recommendations,
            })

        result.sort(
            key=lambda item: item["overall_gap"],
            reverse=True
        )

        return {
            "success": True,
            "centre": centre["name"],
            "data": result
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }

@app.post("/api/impact/recalculate")
def recalculate_impact_scores():
    try:
        response = (
            supabase.table("candidates")
            .select("*")
            .execute()
        )

        candidates = response.data or []
        updated = []

        for candidate in candidates:
            job_relevance = float(
                candidate.get("job_relevance") or 0
            )

            retention = float(
                candidate.get("retention_rate") or 0
            )

            income_growth = float(
                candidate.get("income_growth") or 0
            )

            status = candidate.get("status") or ""

            # Employment outcome score
            employment_score = (
                100
                if status == "Employed"
                else 40
                if status == "Seeking Job"
                else 50
            )

            # Normalize income growth.
            # 50% income growth or more = maximum score.
            income_score = min(
                max(income_growth * 2, 0),
                100
            )

            # Impact Score
            impact_score = round(
                (
                    job_relevance * 0.30
                    + retention * 0.30
                    + employment_score * 0.20
                    + income_score * 0.20
                ),
                1
            )

            # Classification
            if impact_score >= 80:
                impact_level = "Excellent"
            elif impact_score >= 65:
                impact_level = "Good"
            elif impact_score >= 50:
                impact_level = "Needs Attention"
            else:
                impact_level = "Critical"

            # Update database
            supabase.table("candidates").update({
                "impact_score": impact_score
            }).eq(
                "id",
                candidate["id"]
            ).execute()

            updated.append({
                "candidate_id": candidate.get("candidate_id"),
                "candidate_name": candidate.get("name"),
                "impact_score": impact_score,
                "impact_level": impact_level
            })

        return {
            "success": True,
            "updated": len(updated),
            "data": updated
        }

    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }

from fastapi import UploadFile, File


@app.post("/api/import/candidates")
async def import_candidates_csv(
    file: UploadFile = File(...)
):
    try:
        # -------------------------------------------------
        # Validate file
        # -------------------------------------------------

        if not file.filename:
            return {
                "success": False,
                "error": "No file selected."
            }

        if not file.filename.lower().endswith(".csv"):
            return {
                "success": False,
                "error": "Only CSV files are supported."
            }

        # -------------------------------------------------
        # Read file
        # -------------------------------------------------

        contents = await file.read()

        if not contents:
            return {
                "success": False,
                "error": "The uploaded CSV file is empty."
            }

        try:
            text = contents.decode("utf-8-sig")
        except UnicodeDecodeError:
            return {
                "success": False,
                "error": (
                    "Unable to read CSV. "
                    "Please save the file as UTF-8 CSV."
                )
            }

        reader = csv.DictReader(
            io.StringIO(text)
        )

        if not reader.fieldnames:
            return {
                "success": False,
                "error": "CSV headers could not be detected."
            }

        # -------------------------------------------------
        # Normalize headers
        # -------------------------------------------------

        headers = [
            header.strip()
            for header in reader.fieldnames
            if header
        ]

        required_columns = [
            "candidate_id",
            "name",
            "course",
            "training_centre_id",
        ]

        missing_columns = [
            column
            for column in required_columns
            if column not in headers
        ]

        if missing_columns:
            return {
                "success": False,
                "error": "Missing required columns.",
                "missing_columns": missing_columns,
                "required_columns": required_columns,
            }

        # -------------------------------------------------
        # Read rows
        # -------------------------------------------------

        rows = []

        for row_number, row in enumerate(
            reader,
            start=2
        ):
            cleaned = {}

            for key, value in row.items():
                if key:
                    cleaned[key.strip()] = (
                        value.strip()
                        if isinstance(value, str)
                        else value
                    )

            # Ignore empty rows
            if not any(cleaned.values()):
                continue

            cleaned["_row_number"] = row_number
            rows.append(cleaned)

        if not rows:
            return {
                "success": False,
                "error": "No candidate records found."
            }

        # -------------------------------------------------
        # Get existing candidate IDs
        # -------------------------------------------------

        existing_response = (
            supabase
            .table("candidates")
            .select("candidate_id")
            .execute()
        )

        existing_ids = {
            item.get("candidate_id")
            for item in (
                existing_response.data or []
            )
            if item.get("candidate_id")
        }

        # -------------------------------------------------
        # Detect duplicate IDs inside CSV
        # -------------------------------------------------

        seen_ids = set()
        duplicate_ids = set()

        for row in rows:
            candidate_id = (
                row.get("candidate_id") or ""
            ).strip()

            if candidate_id in seen_ids:
                duplicate_ids.add(candidate_id)

            seen_ids.add(candidate_id)

        # -------------------------------------------------
        # Process rows
        # -------------------------------------------------

        valid_records = []
        errors = []
        skipped = []

        for row in rows:

            row_number = row["_row_number"]

            candidate_id = (
                row.get("candidate_id") or ""
            ).strip()

            name = (
                row.get("name") or ""
            ).strip()

            course = (
                row.get("course") or ""
            ).strip()

            centre_value = (
                row.get("training_centre_id")
                or ""
            ).strip()

            # ---------------------------------------------
            # Required fields
            # ---------------------------------------------

            if not candidate_id:
                errors.append({
                    "row": row_number,
                    "error":
                        "candidate_id is required"
                })
                continue

            if not name:
                errors.append({
                    "row": row_number,
                    "candidate_id":
                        candidate_id,
                    "error":
                        "name is required"
                })
                continue

            if not course:
                errors.append({
                    "row": row_number,
                    "candidate_id":
                        candidate_id,
                    "error":
                        "course is required"
                })
                continue

            if not centre_value:
                errors.append({
                    "row": row_number,
                    "candidate_id":
                        candidate_id,
                    "error":
                        "training_centre_id is required"
                })
                continue

            # ---------------------------------------------
            # Duplicate check
            # ---------------------------------------------

            if candidate_id in duplicate_ids:
                skipped.append({
                    "row": row_number,
                    "candidate_id":
                        candidate_id,
                    "reason":
                        "Duplicate candidate_id inside CSV"
                })
                continue

            if candidate_id in existing_ids:
                skipped.append({
                    "row": row_number,
                    "candidate_id":
                        candidate_id,
                    "reason":
                        "Candidate already exists"
                })
                continue

            # ---------------------------------------------
            # Training centre ID
            # ---------------------------------------------

            try:
                training_centre_id = int(
                    centre_value
                )
            except ValueError:
                errors.append({
                    "row": row_number,
                    "candidate_id":
                        candidate_id,
                    "error":
                        "training_centre_id must be a number"
                })
                continue

            # ---------------------------------------------
            # Numeric helper
            # ---------------------------------------------

            def parse_number(
                field_name,
                default=0
            ):
                value = row.get(field_name)

                if value in (None, ""):
                    return default

                try:
                    return float(value)
                except (
                    ValueError,
                    TypeError
                ):
                    raise ValueError(
                        f"{field_name} must be numeric"
                    )

            # ---------------------------------------------
            # Parse metrics
            # ---------------------------------------------

            try:
                job_relevance = parse_number(
                    "job_relevance"
                )

                retention_rate = parse_number(
                    "retention_rate"
                )

                income_growth = parse_number(
                    "income_growth"
                )

            except ValueError as error:
                errors.append({
                    "row": row_number,
                    "candidate_id":
                        candidate_id,
                    "error": str(error)
                })
                continue

            # ---------------------------------------------
            # Validate metric ranges
            # ---------------------------------------------

            metrics = {
                "job_relevance":
                    job_relevance,
                "retention_rate":
                    retention_rate,
                "income_growth":
                    income_growth,
            }

            invalid_metric = False

            for field_name, value in metrics.items():

                if value < 0 or value > 100:
                    errors.append({
                        "row": row_number,
                        "candidate_id":
                            candidate_id,
                        "error": (
                            f"{field_name} must "
                            "be between 0 and 100"
                        )
                    })

                    invalid_metric = True

            if invalid_metric:
                continue

            # ---------------------------------------------
            # Status
            # ---------------------------------------------

            status = (
                row.get("status")
                or "Training"
            ).strip()

            allowed_statuses = [
                "Training",
                "Employed",
                "Seeking Job",
                "Job Mismatch",
            ]

            if status not in allowed_statuses:
                errors.append({
                    "row": row_number,
                    "candidate_id":
                        candidate_id,
                    "error": (
                        "Invalid status. Allowed: "
                        + ", ".join(
                            allowed_statuses
                        )
                    )
                })
                continue

            # =================================================
            # IMPACT SCORE ENGINE
            # =================================================

            if status == "Employed":
                employment_score = 100
            elif status == "Seeking Job":
                employment_score = 40
            elif status == "Job Mismatch":
                employment_score = 30
            else:
                employment_score = 50

            income_score = min(
                max(
                    income_growth * 2,
                    0
                ),
                100
            )

            impact_score = round(
                (
                    job_relevance * 0.30
                    + retention_rate * 0.30
                    + employment_score * 0.20
                    + income_score * 0.20
                ),
                1
            )

            # =================================================
            # RISK PROBABILITY ENGINE
            # =================================================

            employment_risk = (
                90
                if status == "Seeking Job"
                else 80
                if status == "Job Mismatch"
                else 15
                if status == "Employed"
                else 50
            )

            retention_risk = max(
                0,
                min(
                    100,
                    100 - retention_rate
                )
            )

            skill_mismatch_risk = max(
                0,
                min(
                    100,
                    100 - job_relevance
                )
            )

            impact_risk = max(
                0,
                min(
                    100,
                    100 - impact_score
                )
            )

            income_risk = max(
                0,
                min(
                    100,
                    100 - income_growth * 2
                )
            )

            risk_probability = round(
                (
                    employment_risk * 0.30
                    + retention_risk * 0.25
                    + skill_mismatch_risk * 0.20
                    + impact_risk * 0.20
                    + income_risk * 0.05
                ),
                1
            )

            if risk_probability >= 70:
                risk_level = "High"
            elif risk_probability >= 40:
                risk_level = "Medium"
            else:
                risk_level = "Low"

            # ---------------------------------------------
            # Prepare database record
            # ---------------------------------------------

            valid_records.append({
                "candidate_id":
                    candidate_id,

                "name":
                    name,

                "email":
                    row.get("email") or None,

                "phone":
                    row.get("phone") or None,

                "course":
                    course,

                "training_centre_id":
                    training_centre_id,

                "status":
                    status,

                "job_relevance":
                    job_relevance,

                "retention_rate":
                    retention_rate,

                "income_growth":
                    income_growth,

                "impact_score":
                    impact_score,

                "risk_level":
                    risk_level,
            })

        # =================================================
        # INSERT VALID RECORDS
        # =================================================

        inserted = []

        if valid_records:

            insert_response = (
                supabase
                .table("candidates")
                .insert(valid_records)
                .execute()
            )

            inserted = (
                insert_response.data or []
            )

        # =================================================
        # SAVE IMPORT HISTORY
        # IMPORTANT: THIS MUST BE BEFORE THE FINAL RETURN
        # =================================================

        supabase.table(
            "import_history"
        ).insert({
            "file_name":
                file.filename,

            "total_rows":
                len(rows),

            "inserted_rows":
                len(inserted),

            "skipped_rows":
                len(skipped),

            "error_rows":
                len(errors),

            "status":
                "Completed",
        }).execute()

        # =================================================
        # FINAL RESPONSE
        # =================================================

        return {
            "success": True,

            "filename":
                file.filename,

            "total_rows":
                len(rows),

            "inserted":
                len(inserted),

            "skipped":
                len(skipped),

            "errors":
                len(errors),

            "data":
                inserted,

            "skipped_records":
                skipped,

            "errors_detail":
                errors,
        }

    except Exception as e:

        return {
            "success": False,
            "error": str(e),
        }


@app.get("/api/import-history")
def get_import_history():
    try:

        response = (
            supabase
            .table("import_history")
            .select("*")
            .order(
                "imported_at",
                desc=True
            )
            .execute()
        )

        history = (
            response.data or []
        )

        return {
            "success": True,
            "total": len(history),
            "data": history,
        }

    except Exception as e:

        return {
            "success": False,
            "error": str(e),
        }
