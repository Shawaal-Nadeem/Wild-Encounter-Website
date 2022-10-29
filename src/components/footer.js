import React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
function Footer() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#272727",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    borderBloc:'dotted',
    boxShadow:'none',
    color: "white",
  }));
  return (
    <div className="fullFooter">
    <div className="stacks">
      <Stack
        direction="row"
        divider={<Divider Color='#3D3D3D' orientation="vertical" flexItem/>}
        spacing={2}
      >
        <Item>
          <p className="end-head1">Our Services</p>
          <p className="col1-line">
            Wildlife Awareness & Bear Defense Training
          </p>
          <p className="col1-line">Wildlife Hazard Assessments</p>
          <p className="col1-line">Wildlife Monitoring</p>
          <p className="col1-line">Wildlife Defense Supply Sales & Rentals</p>
          <p className="col1-line">
            Wildlife Safety Audits & Policy Development
          </p>
          <p className="col1-line">
            Karelian Bear Dog (KBD) & Cougar Hound Services
          </p>
          <p className="disclaimer">Disclaimer</p>
          <p className="col1-lastLine">
            Wild Encounters Ltd. provides advice and training services to better<br/>
            equip employees and the public in handling wildlife encounters and<br/>
            attacks. It is understood and conveyed that all wild animals are<br/>
            unpredictable and sometimes dangerous, no two encounters or attacks<br/>
            are the same, and that every individual must exercise common sense<br/>
            and discretion to appropriately respond in each situation. Wild<br/>
            Encounters Ltd. does not communicate absolutes, but rather<br/>
            recommendations and suggested guidelines based on experiences and<br/>
            proven strategies.
          </p>
        </Item>
        <Item>
          <p className="end-head1">NEWS</p>
          <p className="col1-line">Suncor employee killed in bear attack</p>
          <p className="col1-line">
            Pipeline worker attacked by cougar shares story
          </p>
          <p className="col1-line">
            Missing Kananaskis hunter, killed in bear attack
          </p>
          <p className="col1-line">
            The Great Canadian Oilsands Black Bear Massacre
          </p>
          <p className="col1-line">Nunavut Man Killed by Polar Bear</p>
          <p className="col1-line">Shoot or Spray?</p>
          <p className="col1-line">
            Canada Mauling Reflects Spike in Human-Bear Encounters
          </p>
        </Item>
        <Item>
          <p className="end-head3">Kevin Wilson</p>
          <p className="col1-line">Edmonton, Alberta</p>
          <table>
            <tr>
              <td>
                <p className="col3-line">Phone:</p>
              </td>
              <td>
                <p>780.913.1021</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="col3-line">Fax:</p>
              </td>
              <td>
                <p>780.489.9933</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="col3-line">Email:</p>
              </td>
              <td>
                <p>Kevin@WildEncountersLtd.com</p>
              </td>
            </tr>
          </table>
          <img className="homepic8" src="/images/homepic8.png" alt="" />
        </Item>
      </Stack>
      </div>
      <div className="footer">
        <p className="footer-line">
          Wild Encounters Ltd. | All rights Reserved 2019
        </p>
      </div>
    
    </div>
  );
}

export default Footer;
