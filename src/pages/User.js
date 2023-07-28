import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserData } from "../services/ApiCall";
import Header from "../components/Header";
import VerticalBar from "../components/VerticalBar";
import Results from "../components/Results";
import SessionsChart from "../components/SessionsChart";
import ActivityChart from "../components/ActivityChart";
import PerformancesChart from "../components/PerformancesChart";
import ScoreChart from "../components/ScoreChart";
import calIcon from "../img/cal-icon.png";
import carbsIcon from "../img/carbs-icon.png";
import fatIcon from "../img/fat-icon.png";
import protIcon from "../img/protein-icon.png";
import "../styles/User.scss";

const User = () => {
  const [user, setUser] = useState({});

  const allParam = useParams();
  const paramId = allParam.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserData(paramId);
      setUser(data);
    };
    fetchData();
  }, [paramId]);

  return (
    <div className="user">
      <Header />
      <main className="user__mainContent">
        <aside className="user__mainContentAside">
          <VerticalBar />
        </aside>
        <section className="user__mainContentSection">
          <div className="user__mainContentSection--accueil">
            <p className="user__mainContentSection--para">
              Bonjour{" "}
              <span className="user__mainContentSection--name">
                {user?.userInfos?.firstName}
              </span>
            </p>
            <p className="user__mainContentSection--paraTxt">
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
          </div>
          <div className="user__mainContentSection--graph">
            <div className="user__mainContentSection--graphLeft">
              <div className="user__mainContentSection--graphLeftActivity">
                <ActivityChart />
              </div>
              <div className="user__mainContentSection--graphLeftBottomList">
                <div className="user__mainContentSection--sessionChart user__mainContentSection--graphLeftBottomListItem">
                  <SessionsChart />
                </div>
                <div className="user__mainContentSection--performanceChart user__mainContentSection--graphLeftBottomListItem">
                  <PerformancesChart />
                </div>
                <div className="user__mainContentSection--scoreChart user__mainContentSection--graphLeftBottomListItem">
                  <ScoreChart />
                </div>
              </div>
            </div>
            <div className="user__mainContentSection--graphRight">
              <Results
                icon={calIcon}
                count={user?.keyData?.calorieCount + "kCal"}
                denom={"Calories"}
              />
              <Results
                icon={protIcon}
                count={user?.keyData?.proteinCount + "g"}
                denom={"Protéines"}
              />
              <Results
                icon={carbsIcon}
                count={user?.keyData?.carbohydrateCount + "g"}
                denom={"Glucides"}
              />
              <Results
                icon={fatIcon}
                count={user?.keyData?.lipidCount + "g"}
                denom={"Lipides"}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default User;
