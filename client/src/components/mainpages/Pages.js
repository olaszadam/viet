import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import OrderHistory from './history/OrderHistory'
import OrderDetails from './history/OrderDetails'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'

import {GlobalState} from '../../GlobalState'
import Main from './main/main'
import EsBel from './esemenyek_bel/EsBel'
import youtopia from './esemenyek_bel/youtopia'
import blackmamba from './esemenyek_bel/blackmamba'
import nice002 from './esemenyek_bel/nice002'
import nofear from './esemenyek_bel/nofear'
import marco from './esemenyek_kul/marco'
import chris from './esemenyek_kul/chris'
import petre from './esemenyek_kul/petre'
import zenek_main from './zenek/zenek_main'
import alliwant from './zenek/alliwant/alliwant'
import edleez from './zenek/edleez/edleez'
import rawflex from './zenek/rawflex/rawflex'
import EsKul from './esemenyek_kul/EsKul'

function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/detail/:id" exact component={DetailProduct} />

            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />

            <Route path="/category" exact component={isAdmin ? Categories : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />

            <Route path="/history" exact component={isLogged ? OrderHistory : NotFound} />
            <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} />
            <Route path="/eventsbel" exact component={isLogged ? EsBel : NotFound} />
            <Route path="/eventskul" exact component={isLogged ? EsKul : NotFound} />
            
            <Route path="/youtopia" exact component={isLogged ? youtopia : NotFound} />
            <Route path="/blackmamba" exact component={isLogged ? blackmamba : NotFound} />
            <Route path="/nice" exact component={isLogged ? nice002 : NotFound} />
            <Route path="/nofear" exact component={isLogged ? nofear : NotFound} />
            <Route path="/chris" exact component={isLogged ? chris : NotFound} />
            <Route path="/marco" exact component={isLogged ? marco : NotFound} />
            <Route path="/petre" exact component={isLogged ? petre : NotFound} />
            <Route path="/zenek" exact component={isLogged ? zenek_main : NotFound} />
            <Route path="/alliwant/alliwant" exact component={isLogged ? alliwant : NotFound} />
            <Route path="/edleez/edleez" exact component={isLogged ? edleez : NotFound} />
            <Route path="/rawflex/rawflex" exact component={isLogged ? rawflex : NotFound} />

            <Route path="/cart" exact component={Cart} />


            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages
