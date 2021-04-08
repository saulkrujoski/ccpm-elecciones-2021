import React from "react";
import { Table, Alert } from "react-bootstrap";
import { isNonEmptyArray } from "./../../utils/utils";

const TableResume = (props) => {
  const { elements } = props;
  const hasElements = isNonEmptyArray(elements);

  const subRecordContent = (data) => {
    return (
      <>
        <tr>
          <td style={{paddingLeft: '40px'}}>{data.name}</td>
          <td className="text-centered">{data?.dip_prov?.count}</td>
          <td className="text-centered">{data?.dip_prov?.percent}</td>
          <td className="text-centered">{data?.concejal?.count}</td>
          <td className="text-centered">{data?.concejal?.percent}</td>
          <td className="text-centered">{data?.constituyente?.count}</td>
          <td className="text-centered">{data?.constituyente?.percent}</td>
          <td className="text-centered">{data?.def_del_pueblo?.count}</td>
        </tr>
      </>
    );
  }

  const recordContent = (data) => {
    return (
      <>
        <tr>
          <td>{data.name}</td>
          <td className="text-centered">{data?.dip_prov?.total_count}</td>
          <td className="text-centered">{data?.dip_prov?.total_percent}</td>
          <td className="text-centered">{data?.concejal?.total_count}</td>
          <td className="text-centered">{data?.concejal?.total_percent}</td>
          <td className="text-centered">{data?.constituyente?.total_count}</td>
          <td className="text-centered">{data?.constituyente?.total_percent}</td>
          <td className="text-centered">{data?.def_del_pueblo?.total_count}</td>
        </tr>
        { data.sublemas.map((record) => (
          <>
          { record ? subRecordContent(record) : null }
          </>
          ))
        }
      </>
    );
  }

  return (
    <>
    { hasElements ?
      <Table style={{marginBottom: '40px'}}>
        <thead>
          <tr>
            <th>PARTIDO</th>
            <th>DIP. PROV.</th>
            <th className="text-centered">%</th>
            <th>CONCEJAL</th>
            <th className="text-centered">%</th>
            <th>CONSTITUYENTE</th>
            <th className="text-centered">%</th>
            <th>DEF. DEL PUEBLO</th>
          </tr>
        </thead>
        <tbody>
        { elements.map((record) => (
          <>
          { record ? recordContent(record) : null }
          </>
          ))
        }
        </tbody>
      </Table>
    : 
      <Alert variant="info" className="mt-2 p-2">
          No se han encontrado <strong>registros</strong> para mostrar.
      </Alert>
    }
    </>
  );
};

export default TableResume;