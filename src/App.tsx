import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import LocationStatus from './components/LocationStatus';
import TideInfo from './components/TideInfo';
import ActivityRecommendations from './components/ActivityRecommendations';
import TideChart from './components/TideChart';
import TideInsights from './components/TideInsights';
import { useTideData } from './hooks/useTideData';
import useLocation from './hooks/useLocation';

const App = () => {
  const { location } = useLocation();
  const { loading, error } = useTideData(location);

  return (
    <Router>
      <Header />

      {loading && <LoadingSpinner />}
      {error && <div>Error: {error}</div>}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <LocationStatus location={location} />
              <TideInfo location={location} />
            </>
          }
        />

        <Route path="/tide-chart" element={<TideChart location={location} />} />
        <Route path="/activity-recommendations" element={<ActivityRecommendations location={location} />} />
        <Route path="/tide-insights" element={<TideInsights location={location} />} />
      </Routes>
    </Router>
  );
};

export default App;
