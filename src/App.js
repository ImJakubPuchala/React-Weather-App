import React, { Suspense } from "react";
import Footer from "./components/_footer";
import Loading from "./components/_loading";
import Navigation from "./components/_navigation";
import { weather } from "./func/weather10days";
import { weather24hours } from "./func/weather24hours";
import { Routes, Route, useParams } from "react-router-dom";
import style from "./style/app.module.scss";

//for mid-tier & low-end mobile network
const WeatherBanner = React.lazy(() => import("./components/weatherToday"));
const WeatherFor10DaysBanner = React.lazy(() =>
  import("./components/weatherFor10DaysBanner")
);
const WeatherFor10Days = React.lazy(() =>
  import("./components/weatherFor10Days")
);
const WeatherTodayInfo = React.lazy(() =>
  import("./components/weatherTodayInfo")
);
const WeatherHours = React.lazy(() =>
  import("./components/weatherHoursBanner")
);
const WeatherAirPollution = React.lazy(() =>
  import("./components/weatherAirPollution")
);
const WeatherAllergy = React.lazy(() => import("./components/weatherAllergy"));
const WeatherHourly = React.lazy(() => import("./components/weatherHourly"));

function App() {
  return (
    <div className='App'>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navigation />
        <div className={style.flex}>
          <Routes>
            <Route path='/'>
              <Route index element={<DisplayMain />} />
              <Route path='/hourly' element={<DisplayHourly />} />
              <Route path='/10day' element={<Display10day />} />
            </Route>

            <Route path='/:location'>
              <Route index element={<DisplayMain />} />
              <Route path='hourly' element={<DisplayHourly />} />
              <Route path='10day' element={<Display10day />} />
            </Route>
            <Route path='*' element={<div>404</div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

function DisplayMain() {
  let location = useParams().location;
  return (
    <>
      <div className={style.main}>
        <Suspense fallback={<Loading />}>
          <WeatherBanner weather={weather[0]} location={location} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <WeatherTodayInfo weather={weather24hours} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <WeatherHours weather={weather24hours} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <WeatherFor10DaysBanner weather={weather} />
        </Suspense>
      </div>
      <div className={style.second}>
        <Suspense fallback={<Loading />}>
          <WeatherAirPollution />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <WeatherAllergy />
        </Suspense>
      </div>
    </>
  );
}

function DisplayHourly() {
  return (
    <>
      <div className={style.main}>
        <Suspense fallback={<Loading />}>
          <WeatherHourly />
        </Suspense>
      </div>
      {/* <div className={style.second}></div> */}
    </>
  );
}

function Display10day() {
  return (
    <>
      <div className={style.main}>
        <Suspense fallback={<Loading />}>
          <WeatherFor10Days />
        </Suspense>
      </div>
      {/* <div className={style.second}></div> */}
    </>
  );
}

export default App;
