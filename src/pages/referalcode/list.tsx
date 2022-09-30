import React from "react";
import { useSelector } from "react-redux";

import TRootState from "../../store/root.types";
import { BarsLoader } from "../../components/loader/Loader";



const ReferalCodeList: React.FC = () => {

  const loading = useSelector((state: TRootState) => state.refferalCodes.loading)
  const refferalCodes = useSelector((state: TRootState) => state.refferalCodes.refferalCodeData.refferalCodes)

  return (
    <React.Fragment>
      <div className="table-responsive">
        <table className="table table-hover nowrap m-0">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>User Referral Code</th>
              <th className="text-center">Install By</th>
              <th className="text-center">Remain Benefit</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <BarsLoader />
            ) : refferalCodes && refferalCodes.length > 0 ? (refferalCodes.map((refferalCode, index) => (
              <tr key={index}>
                <td>{refferalCode?.name}</td>
                <td>{refferalCode?.refferalCode}</td>
                <td className="text-center">{refferalCode?.installBy}</td>
                <td className="text-center">{refferalCode?.remainBenefit}</td>
              </tr>)
            )) : (<tr><td colSpan={8} style={{ textAlign: "center" }}>No Refferal codes available</td></tr>)
            }
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default ReferalCodeList;
