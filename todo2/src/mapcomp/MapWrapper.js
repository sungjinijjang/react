import React, {useState} from 'react'
import MapComponent from './MapComponent'
import MapList from './MapList'

const MapWrapper = () => {

    // 초기값 기준 설정(서울 시청)
    const [center, setCenter] = useState({lat: 37.576200, lng: 126.976826})

    const points =[
        {no:1, name:'비트캠프 종로', lat:37.570409, lng:126.985257},
        {no:2, name:'비트캠프 서초', lat:37.502972, lng:127.024213},
        {no:3, name:'비트캠프 강남', lat:37.499506, lng:127.029257},
        {no:4, name:'비트캠프 신촌', lat:37.552590, lng:126.937611},
    ]

    //위치 보여주는 ~ list에 전달
    const showPoint = (point) => {
        console.log(point)
        setCenter(point)
    }

    return(
        <div>
            <MapComponent center={center}></MapComponent>
            <MapList points={points} showPoint={showPoint}></MapList>
        </div>
    )
}


export default MapWrapper