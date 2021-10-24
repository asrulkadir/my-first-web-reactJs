import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import { JumbotronImg1 } from '../../assets/assets';
import Gap from '../../components/atoms/Gap/Gap';
import Underline from '../../components/atoms/Underline/Underline';
import Categories from '../../components/molecules/Categories/Categories';
import Jumbotron from '../../components/molecules/Jumbotron/Jumbotron';
import KaosPolos from './KaosPolos/KaosPolos';
import { Switch, Route, useRouteMatch} from "react-router-dom";
import "./Products.scss"; 

const Products = () => {
    const { path } = useRouteMatch();

    return (
        <Fragment>
            <Jumbotron image={JumbotronImg1} />
            <Gap height={30} />
            <div className="product-wrapper">
                <div className="categories-wrapper">
                    <Categories />
                </div>
                <div className="set-products">
                    <h1>Products</h1>
                    <Underline />
                     
                    <Switch>
                        <Route exact path={path}>
                            <h3>Please select a Product.</h3>
                        </Route>
                        <Route path={`${path}/kaos_polos`}>
                            <KaosPolos />
                        </Route>
                        <Route path={`${path}/raglan`}>
                            <h3>Belum Tersedia</h3>
                        </Route>
                    </Switch>

                </div>
            </div>
        </Fragment>
    )
}

export default withRouter(Products);
