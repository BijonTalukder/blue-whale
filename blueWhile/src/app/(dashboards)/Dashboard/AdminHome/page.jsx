"use client";
import BreadCrumb from "@/components/BreadCrumb/BreadCrumb";
import { useGetGrievancesQuery } from "@/redux/Feature/User/Grievance/grievanceApi";
import Link from "next/link";
import React, { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import DashboardTitle from "@/components/DashboardTitle/DashboardTitle";

const AdminHome = () => {
  const { currentLanguage } = useContext(LanguageContext);
  const admin = JSON.parse(localStorage.getItem("adminInfo"));
  const { data } = useGetGrievancesQuery();

  const grievanceData = data?.data?.map((grievance, index) => ({
    key: index,
  }));

  const pending = data?.data?.filter(
    (item) => item?.grievanceStatus === "Pending"
  );
  const accepted = data?.data?.filter(
    (item) => item?.grievanceStatus === "Accepted"
  );
  const progress = data?.data?.filter(
    (item) => item?.grievanceStatus === "Completed"
  );
  const reject = data?.data?.filter(
    (item) => item?.grievanceStatus === "Rejected"
  );

  return (
    <div>
     <DashboardTitle windowTitle={"এডমিন হোম"}/>
      <div className="mt-5 flex flex-col items-center">
        <h1 className="lg:text-4xl font-bold uppercase text-blue-600 mb-4">
          {currentLanguage === "en"
            ? `Welcome ${admin?.adminFullName}`
            : `স্বাগতম ${admin?.adminFullName}`}
        </h1>
        <p className="lg:text-lg text-center text-gray-600">
          {currentLanguage === "en"
            ? "Manage your preferences easily from here."
            : "এখান থেকে সহজেই আপনার পছন্দগুলি পরিচালনা করুন।"}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: currentLanguage === "en" ? "Total Grievance" : "মোট অভিযোগ",
            count: grievanceData?.length || 0,
          },
          {
            title: currentLanguage === "en" ? "Total Pending" : "মোট পেন্ডিং",
            count: pending?.length || 0,
          },
          {
            title: currentLanguage === "en"
              ? "Total Accepted"
              : "মোট গৃহীত",
            count: accepted?.length || 0,
          },
          {
            title: currentLanguage === "en"
              ? "Total Completed"
              : "মোট সম্পন্ন",
            count: progress?.length || 0,
          },
          {
            title: currentLanguage === "en" ? "Total Rejected" : "মোট প্রত্যাখ্যান",
            count: reject?.length || 0,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="rounded-lg bg-blue-50 py-4 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg border hover:border-primary cursor-pointer"
          >
            <dt className="order-last text-base font-medium text-gray-500">
              {item.title}
            </dt>
            <dd className="text-4xl font-extrabold text-primary md:text-3xl">
              {item.count}
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminHome;
