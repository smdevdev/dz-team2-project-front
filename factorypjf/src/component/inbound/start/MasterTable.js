import React, { useEffect, useState } from "react";
import MasterRow from "./MasterRow";
import inboundClasses from '../../../style/inbound/inbound.module.css';

const MasterTable = ({
  setMasterLength,
  masterLength,
  boundId,
  setMaseterFocus,
  masterFlag,
  setSubFlag,
  setCheckedBoundIds,
  deletedBoundIds,
  incrementedBoundNo,
  incrementBoundNo
}) => {

  const functionincrementBoundNo = (currentNo) => {
    if (!currentNo) return null;
    const prefix = currentNo.substring(0, currentNo.length - 4);
    const numPart = parseInt(currentNo.slice(-4));
    const incrementedNum = numPart + 1;
    return `${prefix}${String(incrementedNum).padStart(4, '0')}`;
  };

  const plustHandler = () => {
    setMasterLength(masterLength + 1);
  };

  let currentBoundNo = incrementedBoundNo;

  return (
    <div>
      <div>
        <tbody>
          {boundId !== 0 && boundId && masterLength > 0 &&
            Array.from({ length: masterLength }).map((_, index) => {
              const currentBoundId = boundId + index;
              if (index > 0) {
                currentBoundNo = functionincrementBoundNo(currentBoundNo);
              }
              
              if (!deletedBoundIds.includes(currentBoundId)) {
                return (
                  <MasterRow key={index}
                             boundId={currentBoundId}
                             boundNo={currentBoundNo}
                             incrementedBoundNo={incrementedBoundNo}
                             setMaseterFocus={setMaseterFocus}
                             masterFlag={masterFlag}
                             setSubFlag={setSubFlag}
                             setCheckedBoundIds={setCheckedBoundIds}
                  />
                );
              }
              return null; // 삭제된 boundId에 해당하는 row는 렌더링하지 않음.
            })}
          <tr>
            <td colSpan="3">
              <button className={inboundClasses.btn_add}
                      onClick={() => plustHandler()}>
                +
              </button>
            </td>
          </tr>
        </tbody>
      </div>
    </div>
  );
};

export default MasterTable;
