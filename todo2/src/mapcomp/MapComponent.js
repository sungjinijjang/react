// id대신 ref로 사용
import React, {useRef, useEffect} from 'react'

// 1. 초기화 2. 상태유지를 위해 map은 전역변수로 둠
let map;

const MapComponent = ({center}) => {

    const kakao = window.kakao

    console.log("map : " + map)

    const mapCenter = new kakao.maps.LatLng(center.lat, center.lng)
    if(map){
        map.panTo(mapCenter)
    }

    const mapRef = useRef()
    const style = {
        width:"100vw",
        height:"40vh",
        backgroundColor:'blue'
    }

    useEffect(() => {
        const mapOption = { 
            center: new kakao.maps.LatLng(center.lat, center.lng), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        }
        
        // Ref는 참조값 Dom 사용하려면 current 
        map = new kakao.maps.Map(mapRef.current, mapOption);
    },[])


    return (
        <div ref={mapRef} style={style}>
            <h1>Map Div</h1>
        </div>
    )
}

export default MapComponent