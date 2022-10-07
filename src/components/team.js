import React from "react";
import { Link } from "react-router-dom";
function Team() {
  return (
    <div>
      <div id="main-Team">
        <nav className="navbar">
          <label className="logo">
            <img className="img-size" src="/images/logo.png" alt="logo" />
          </label>
          <ul className="btn-nav">
            <Link exact to="/">
              <li>
                <button className="navbtn">Home</button>
              </li>
            </Link>
            <Link to="/Our-Team">
              <li>
                <button className="navbtn">Our Team</button>
              </li>
            </Link>
            <Link to="/Services">
              <li>
                <button className="navbtn">Services</button>
              </li>
            </Link>
            <Link to="/Contact-Us">
              <li>
                <button className="navbtn">Contact Us</button>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <h1 className="team-heading1">Our Team</h1>
      <hr className="line"></hr>

      <div className="all-intro">
        <div className="kevin-wilson">
          <div className="kevin-wilson-pic-section">
            <img src="/images/teampic2.png" alt="" />
          </div>
          <div className="kevin-detail">
            <h1 className="name1">Kevin Wilson</h1>
            <p className="rank1">
              President & CEO<br></br>Course Instructor
            </p>
            <p className="kevin-detail-lines">
              Kevin comes from a diverse corporate, recreational, and wildlife
              conservation background. With a BPE in Administration from the
              University of Alberta, he has 26 years of experience as a
              consultant working with industry, all levels of government, and
              the non-profit sector.
              <br />
              <br />
              Since 1998 Kevin has earned a strong reputation as a Project
              Manager & Communications Specialist. For 17 years he has provided
              consulting services to the University of Alberta, Alberta
              Environment and Sustainable Resource Development (AESRD), Alberta
              Education, and many private businesses and non-profit agencies.
              Projects have focussed on initiating and administering wildlife
              management programs, developing and facilitating safety guidelines
              for Alberta’s school system, assessments, environmental scanning,
              and extensive report-writing.
            </p>
          </div>
        </div>
      </div>
      <div className="last-para-kevin-detail">
        <p>
          Aside from his consulting services, he also owns and operates a
          successful professional outfitting & guiding business (Venture North
          Outfitting), hosting big game and bird game hunters from around the
          world since 2001. An integral part of that business involves
          interaction with a variety of wildlife, travel into remote backcountry
          destinations, and regular close-range encounters with a variety of
          predators e.g., black bears, grizzly bears, coyotes, wolves, and more.
          Through his 14 years as a professional outfitter & guide, Kevin has
          gained an intimate understanding of wildlife ecology, animal
          behaviour, how to avoid and respond in wildlife conflict situations,
          and most importantly how to safely and effectively implement
          non-lethal defense strategies and tools (such as pepper spray) to
          defend against predatory wildlife.
          <br />
          <br />
          Further, Kevin has been a member of the outdoor media since 1992. As a
          multiple award-winning outdoor writer/photographer and active member
          of the Outdoor Writers of Canada, he has brought his diverse outdoor
          skills and knowledge to readers in hundreds of magazine, online, and
          newspaper articles and columns. He, along with his wife Heather, have
          been guest hosts on several outdoor television shows, co-hosts of a
          popular hunting television show and currently serve as co-hosts of
          Canadian Outdoorsman TV. Through their broadcasts, they continue to
          share their expertise and interest in hunting, tracking, trapping, and
          encountering wildlife with viewers.
          <br />
          <br />
          Maintaining a passionate interest in predators, Kevin enthusiastically
          brings awareness & education to his clients through Wild Encounters
          Ltd.
        </p>
      </div>
      <hr className="line" />

      <div className="all-intro">
        <div className="kevin-wilson">
          <div className="kevin-wilson-pic-section">
            <img src="/images/teampic3.png" alt="" />
          </div>
          <div className="kevin-detail">
            <h1 className="name1">Adam Christie</h1>
            <p className="rank1">
              Problem Wildlife Specialist & Course Instructor
            </p>
            <p className="kevin-detail-lines">
              Adam Christie worked for 20 years as a Fish and Wildlife
              Conservation Officer in British Columbia. Throughout his career,
              he responded to thousands of human-wildlife conflict situations
              across the province.
              <br />
              <br />
              As a problem-wildlife specialist, he has developed skills in
              recognizing & categorizing wildlife behaviour, assessing the
              resulting risks to people, and how best to mitigate those risks;
              whether by advising the persons involved or actively intervening
              himself. This experience has given Adam a deep understanding of
              tools & strategies used to professionally manage wildlife
              interactions with people in whatever environment they occur.
              <br />
              <br />
              In addition, Adam served as a Firearm Instructor in the British
              Columbia CO Service for 14 years, providing training to in-service
              officers & recruits. He eventually advanced into the position of
              Chief Firearm Instructor. In this role he was involved in
              developing & delivering the curriculum of firearms instruction
              provided to the Wildlife Officer recruits of British Columbia,
              Alberta, Saskatchewan and Manitoba as part of their joint training
              initiative.
            </p>
          </div>
        </div>
      </div>
      <div className="last-para-kevin-detail">
        <p>
          Since retiring from the CO Service in 2014 he has continued to put his
          skills & experience to use working on a Mountain Caribou recovery
          project and providing wildlife monitoring services in Alberta’s Oil
          Sands operations.
        </p>
      </div>
      <hr className="line" />

      <div className="all-intro">
        <div className="kevin-wilson">
          <div className="kevin-wilson-pic-section">
            <img src="/images/teampic4.jpg" alt="" />
          </div>
          <div className="kevin-detail">
            <h1 className="name1">Wally Tichonuk</h1>
            <p className="rank1">Consultant & Course Instructor</p>
            <p className="kevin-detail-lines">
              With over 40 years of hands-on industrial and outdoor recreation
              experience, Wally has an in-depth understanding of bears and
              biodiversity. Born and raised in Lac La Biche, Alberta, he
              attended Alberta Vocational College, Northern Alberta Technical
              Institute (NAIT), and Portage College. His diverse background
              brings a wealth of expertise to the Wild Encounters team, both as
              an active oil & gas industry worker and as an accomplished
              environmental consultant with a specialization in predrilling
              services.
              <br />
              <br />
              Certified through ACSA as a Health and Safety Administrator, Wally
              is currently working on completing his NCSO status. As such, his
              personal commitment to safety draws not only from formal training,
              but also decades of hands-on time in the field. As a certified
              Emergency Medical Technician (EMT-A) he has been a preceptor for
              local colleges, a certified CPR and First Aid instructor, and a
              primary Medivac attendant in northeast Alberta.
            </p>
          </div>
        </div>
      </div>
      <div className="last-para-kevin-detail">
        <p>
          Wally’s academic background, skill, enthusiasm, and passion for
          wildlife make him an ideal consultant and course instructor.
        </p>
      </div>
      <hr className="line" />

      <div className="all-intro">
        <div className="kevin-wilson">
          <div className="kevin-wilson-pic-section">
            <img src="/images/teampic5.png" alt="" />
          </div>
          <div className="kevin-detail">
            <h1 className="name1">Craig Lafleur</h1>
            <p className="rank1">Consultant & Course Instructor</p>
            <p className="kevin-detail-lines">
              Craig Lafleur has a diverse background in public service and
              industrial safety training. Growing up in Vanderhoof, British
              Columbia, his father played a significant role in introducing him
              to hunting and other outdoor pursuits. His professional
              accreditations combined with his intense interest in predatory
              wildlife species, make Craig an exceptional asset to Wild
              Encounters.
              <br />
              <br />
              An active firefighter for over 13 years, Craig currently holds
              rank as his fire department Captain and training instructor both
              internally and for outside agencies. He also steps into live burn
              scenarios to act as an interior fire Safety Officer, overseeing
              the proper training and safety of the teams.
              <br />
              <br />
              Craig’s analytical approach to work and his recreational pastimes
              have allowed him to gain a wealth of wildlife knowledge, and a
              specialization in predator management.
            </p>
          </div>
        </div>
      </div>
      <hr className="line" />

      <div className="all-intro">
        <div className="kevin-wilson">
          <div className="kevin-wilson-pic-section">
            <img src="/images/teampic6.png" alt="" />
          </div>
          <div className="kevin-detail">
            <h1 className="name1">Dean Fraser</h1>
            <p className="rank1">Firearms Course Instructor</p>
            <p className="kevin-detail-lines">
              Born and raised in rural Alberta, Dean’s family history is deeply
              rooted in the outdoor lifestyle. Hunting and shooting sports have
              been an integral part of his life for as long as he can remember.
              Securing his first Firearms Acquisition Certificate (F.A.C.) and
              rifle at the age of 12, firearms have since become a focal point
              for his career.
              <br />
              <br />
              Dean’s earliest professional services involved teaching safe
              firearms use & marksmanship at a busy commercial gun range in
              2003. During that time he also worked as a Range Safety Officer
              (R.S.O.) and trained new staff in that capacity as well. In 2005
              Dean became a licensed gunsmith and launched his company Tactical
              Advantage Ltd. Then, in 2006, he became an accredited Canadian
              Firearms Instructor/Examiner. He has been actively teaching
              classes, training students, and facilitating certification
              challenges since then. Over the past 10 years, Dean has gained a
              strong reputation for both his proprietary R.S.O. course and his
              professional knowledge, skill, and delivery of the Canadian
              Firearms Safety Course.
            </p>
          </div>
        </div>
      </div>
      <div className="last-para-kevin-detail">
        <p>
          In 2014, Dean also began consulting to the Northern Alberta Institute
          of Technology (NAIT) for future gunsmithing and related courses slated
          to begin in 2016.
        </p>
      </div>
      <hr className="line" />

      <div className="endhome-page">
  <div className="col1">
<p className="end-head1">Our Services</p>
<p className="col1-line">Wildlife Awareness & Bear Defense Training</p>
<p className="col1-line">Wildlife Hazard Assessments</p>
<p className="col1-line">Wildlife Monitoring</p>
<p className="col1-line">Wildlife Defense Supply Sales & Rentals</p>
<p className="col1-line">Wildlife Safety Audits & Policy Development</p>
<p className="col1-line">Karelian Bear Dog (KBD) & Cougar Hound Services</p>
<p className="disclaimer">Disclaimer</p>
</div>
<div className="vertical-line"></div>
<div className="col2">
<p className="end-head1">NEWS</p>
<p className="col1-line">Suncor employee killed in bear attack</p>
<p className="col1-line">Pipeline worker attacked by cougar shares story</p>
<p className="col1-line">Missing Kananaskis hunter, killed in bear attack</p>
<p className="col1-line">The Great Canadian Oilsands Black Bear Massacre</p>
<p className="col1-line">Nunavut Man Killed by Polar Bear</p>
<p className="col1-line">Shoot or Spray?</p>
<p className="col1-line">Canada Mauling Reflects Spike in Human-Bear Encounters</p>
</div>
<div className="vertical-line"></div>
<div className="col3">
<p className="end-head3">Kevin Wilson</p>
<p className="col1-line">Edmonton, Alberta</p>
<table>
  <tr>
    <td><p className="col3-line">Phone:</p></td>
    <td><p>780.913.1021</p></td>
  </tr>
  <tr>
    <td><p className="col3-line">Fax:</p></td>
    <td><p>780.489.9933</p></td>
  </tr>
  <tr>
    <td><p className="col3-line">Email:</p></td>
    <td><p>Kevin@WildEncountersLtd.com</p></td>
  </tr>
</table>
<img className="homepic8" src="/images/homepic8.png" alt="" />
</div>
</div>
<div className="endteamfooter">
  <p className="footer-line">Wild Encounters Ltd. | All rights Reserved 2019</p>

  </div>
    </div>
  );
}
export default Team;
