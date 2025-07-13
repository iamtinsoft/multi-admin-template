import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


export function GetGeoLocation() {
  let { currentUser } = useContext(AuthContext);
  let latitude: any = null;
  let longitude: any = null;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position: any) => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        // let data = {
        //   userId: currentUser?.userId,
        //   latitude,
        //   longitude,
        // };
        // await SetGeolocation(data);
        //console.log(position.coords);
      },
      () => {
        alert("cannot get location");
      }
    );
  } else {
    console.log("Geolocation not supported");
  }
  return { latitude, longitude };
}
