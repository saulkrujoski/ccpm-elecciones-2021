import React from 'react';

import Header from './header';
import Footer from './footer';
import TableResume from './../resume/table';
import ListMunicipality from './../list/listMunicipality';

import listVotesData from './../../data/listVotes';
import listMunicipalityData from './../../data/listMunicipality';
import { transformDropdownOptions } from './../../utils/utils';

const Layout = (props) => {
    const data = listVotesData;
    const municipalities = transformDropdownOptions(listMunicipalityData);

    return (
        <div className="container-fluid">
            {/* <SpinnerComplete/> */}
            <Header />
            <ListMunicipality
                label={"Seleccione un municipio"}
                headerTitle={"Municipios de la Provincia de Misiones"}
                elements={municipalities}
            ></ListMunicipality>
            <TableResume elements={data}/>
            <Footer/>
        </div>
    )
};

export default Layout;