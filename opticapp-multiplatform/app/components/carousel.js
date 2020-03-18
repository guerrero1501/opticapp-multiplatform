import React, { useRef } from "react";
import { Dimensions } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
const { width } = Dimensions.get("window");

export default function CustomCarousel(props) {
  const carouselRef = useRef(null);

  const { data, style } = props;

  return (
    <SliderBox
      images={getPhotos(data)}
      sliderBoxHeight={300}
      inactiveDotColor="#90A4AE"
      ImageComponentStyle={style}
      autoplay
      circleLoop
      resizeMethod={"resize"}
      resizeMode={"cover"}
    />
  );
}

function getPhotos(obj) {
  var i;
  var rta = [];
  for (i = 1; i <= 8; i++) {
    let o = obj["img" + i];
    if (o === null) console.log(null);
    else rta.push(o);
  }
  console.log(rta);
  return rta;
}
