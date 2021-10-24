import React from 'react';
import { useHistory } from 'react-router';
import "./Categories.scss";

const Categories = () => {
    const history = useHistory();

    const activeProduct = (history, path) => {
        if(history.location.pathname === path) {
            return {fontWeight: "bold"}
        }
    } 

    return (
        <div className="categories">
            <div className="pilih-kategori">
                <p>Pilih Kategori</p>
            </div>

            <div className="kategori-produk" 
            onClick={() => history.push("/products/kaos_polos")}
            style={activeProduct(history, "/products/kaos_polos")} >
                <p>Kaos Polos</p>
            </div>

            <div className="kategori-produk"
            onClick={() => history.push("/products/raglan")}
            style={activeProduct(history, "/products/raglan")}>
                <p>Raglan</p>
            </div>

            <div className="kategori-produk">
                <p>Polo</p>
            </div>

            <div className="kategori-produk">
                <p>Jaket</p>
            </div>

            <div className="kategori-produk">
                <p>Kemeja</p>
            </div>

            <div className="kategori-produk">
                <p>Ladies</p>
            </div>

            <div className="kategori-produk">
                <p>Kids</p>
            </div>

            <div className="kategori-produk">
                <p>Celana</p>
            </div>        
        </div>
    )
}

export default Categories;
