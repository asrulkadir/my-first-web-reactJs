import React, { useState } from 'react';
import { Jaket, Polo, Raglan, Shirt } from '../../../assets/assets';
import Colors from '../../../utils/Colors/Colors';
import Button from "../../../components/atoms/Button/Button";
import ColorBox from "../../../components/atoms/ColorBox/ColorBox";

const KaosPolos = () => {
    const [borderColor, setBorderColor] = useState("");

    const handleClick = (e) => {
        setBorderColor(e.target.style.backgroundColor);
    }

    const activeBorder = (bg, color) => {
        if(bg === color) {
            return {
                border: "5px solid #c2c2c2",
                width: "30px",
                height: "30px"
            };
        }
    }

    const handleImage = () => {
        if(borderColor === Colors["Abu-abu"]) {
            return Raglan;
        } else if (borderColor === Colors["Hitam"]) {
            return Shirt;
        } else if(borderColor === Colors["Navy"]) {
            return Jaket;
        } else {
            return Polo;
        }
    }

    const handleColor = (value) => {
        return Object.keys(Colors).find(key => Colors[key] === value)
    }

    return (
        <div className="grid-wrapper">
        <div className="grid-image">
            <img src={handleImage()} width="300px" alt="Raglan" />
        </div>
        <div className="grid">
            <div>
                <h3>Warna: {handleColor(borderColor)}</h3>
                <hr />
            </div>
            <div className="grid-color">
                <ColorBox onClick={handleClick} color={Colors["Abu-abu"]} style={activeBorder(borderColor, Colors["Abu-abu"])} />
                <ColorBox onClick={handleClick} color={Colors["Hitam"]} style={activeBorder(borderColor, Colors["Hitam"])} />
                <ColorBox onClick={handleClick} color={Colors["Navy"]} style={activeBorder(borderColor, Colors["Navy"])} />
                <ColorBox onClick={handleClick} color={Colors["Maroon"]} style={activeBorder(borderColor, Colors["Maroon"])} />
            </div>
        </div>
        <div className="grid-card">
            <div className="jenis-baju">
                <label htmlFor="jenis-baju">Jenis Baju</label>
                <select id="jenis-baju" name="jenis-baju">
                <option value="20s">Cotton Combed 20s</option>
                <option value="24s">Cotton Combed 24s</option>
                <option value="30s">Cotton Combed 30s</option>
                <option value="40s">Cotton Combed 40s</option>
                </select>
            </div>

            <div className="model-baju">
                <label htmlFor="model">Model Baju</label>
                <select id="model" name="model">
                <option value="standard">Standard</option>
                <option value="lengan-panjang">Lengan Panjang</option>
                <option value="v-neck">V-Neck</option>
                </select>
            </div>

            <div className="ukuran-baju">
                <label htmlFor="ukuran">Ukuran Baju</label>
                <select id="ukuran" name="ukuran">
                <option value="S">Ukuran S</option>
                <option value="M">Ukuran M</option>
                <option value="L">Ukuran L</option>
                <option value="XL">Ukuran XL</option>
                <option value="XXL">Ukuran XXL</option>
                </select>
            </div>

            <div className="grid-baju">
                <div className="warna-baju">
                    <p><strong>Warna:</strong> {handleColor(borderColor)}</p>
                </div>

                <div className="jumlah-baju">
                    <label htmlFor="quantity">Jumlah: </label>
                    <input type="number" id="quantity" name="quantity" min="1" />
                </div>

                <div className="stok-baju">
                    <p> <strong>Stok Barang:</strong> 100</p>
                </div>

                <div className="harga-baju">
                    <p><strong>Harga:</strong> Rp. 30.000</p>
                </div>
            </div>


            <div className="tambah-keranjang">
                <Button style={{width: "50%"}} title="Add To Cart" />
            </div>
            
        </div>
    </div>
    )
}

export default KaosPolos;
