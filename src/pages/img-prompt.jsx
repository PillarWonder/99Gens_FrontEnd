import * as React from "react";
import Axios from "axios";
import Footer1 from "../components/footer-1";
import Header1 from "../components/header-1";
import { isLoggedIn } from "../services/auth";
import { useEffect } from "react";
import { withPrefix } from "gatsby";
import { navigate } from "gatsby";
// import { Image } from "image-js";

export default function Layout() {
    const [previewImage, setPreviewImage] = React.useState("");

    const [showAnimation, setShowAnimation] = React.useState("");

    async function UpscaleImage(image) {
        const merchifyArr = [];
        const response_4x = await Axios.post(
            "https://backpack.99gens-api.com/api/rudalle/upscale4x",
            { "images": [image] }
        );
        merchifyArr.push({
            id_val: 0,
            original: response_4x.data.results[0].upscaled,
            upscaled: response_4x.data.results[0].upscaled,
        });
        localStorage.setItem("mergify", JSON.stringify(merchifyArr));
        localStorage.setItem("job_id", ',,,,,');
        navigate("/select-merch");
    }

    const onChanage = (e) => {
        if (!e.target.files || e.target.files.length == 0) {
            return;
        }

        const file = e.target.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = async function () {
            setShowAnimation(withPrefix("assets/img/green-little-balls.gif"));
            var base64data = reader.result;
            // Image.load(base64data).then((image) => {
            //     console.log("!!!!:", image);
            // if (image.alpha == 0) {
            //     alert("Invalid Image! Please use a different image!");
            // } else {
            setPreviewImage(base64data);
            var real_str = base64data.slice(22);
            Axios.post(
                "https://backpack.99gens-api.com/api/custom/image/upload",
                { "image": real_str }
            ).then((response) => {
                console.log(response);
                UpscaleImage(response.data.image);
            })
            // }
            // })
        }
    }

    return (
        <>
            <div className="container-main" id="page">
                <Header1></Header1>
                <div className="new_gif" style={{ display: "flex" }}>
                    <img src={showAnimation} className="img-fluid mw_50" alt="loading" />
                </div>
                <main className="content-main" style={{ marginLeft: "100px" }}>
                    <div className="content-inner">
                        <input type="file" id="image-input" onChange={onChanage} accept="image/jpeg, image/png, image/jpg" />
                        {previewImage && <img className="" style={{ width: "200px" }} src={previewImage} />}
                    </div>
                </main>
                <Footer1></Footer1>
            </div>
        </>
    );
}
