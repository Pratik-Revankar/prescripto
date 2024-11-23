import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { specialityData } from "../../public/assets";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filterDoc, setFilterDoc] = useState(speciality);
  const { doctors } = useContext(AppContext);
  const applyFilter = (speciality) => {
    if (speciality) {
      setFilterDoc(speciality);
    }
  };

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600 ">
          {specialityData.map((doctor, index) => {
            return (
              <p
                key={doctor.speciality}
                onClick={() => {
                  applyFilter(doctor.speciality);
                  doctor.speciality
                    ? navigate(`/doctors/${doctor.speciality}`)
                    : navigate("/doctors");
                }}
                className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                  doctor.speciality === filterDoc
                    ? "bg-blue-100 text-black"
                    : ""
                }`}
              >
                {doctor.speciality}
              </p>
            );
          })}
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {doctors
            .filter((doctor) => {
              return filterDoc ? doctor.speciality === filterDoc : true;
            })
            .map((doctor, index) => {
              return (
                <div
                  key={doctor._id}
                  onClick={() => navigate(`/appointment/${doctor._id}`)}
                  className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] translate-all duration-500"
                >
                  <img className="bg-blue-50" src={doctor.image} alt="" />
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-center text-green-500">
                      <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                      <p>Available</p>
                    </div>
                    <p className="text-gray-900 text-lg font-medium">
                      {doctor.name}
                    </p>
                    <p className="text-gray-600 text-sm">{doctor.speciality}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
