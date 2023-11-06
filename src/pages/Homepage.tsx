import { FunctionComponent, useState, useCallback } from "react";
import {
  Radio,
  FormControlLabel,
  Autocomplete,
  TextField,
  Icon,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import MatterhornPopup from "../components/MatterhornPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState<string | null>(null);
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);
  const navigate = useNavigate();

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const openMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(true);
  }, []);

  const closeMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(false);
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <div className={styles.homepage}>
          <div className={styles.heroSection}>
            <header className={styles.topHeader}>
              <div className={styles.topContainer}>
                <button className={styles.fickleflightLogo}>
                  <img
                    className={styles.symbolsIcon}
                    alt=""
                    src="/undefined33.png"
                  />
                </button>
                <div className={styles.navigationRight}>
                  <div className={styles.navigationMenu}>
                    <button className={styles.explore}>Explore</button>
                    <div className={styles.search} onClick={onSearchTextClick}>
                      Search
                    </div>
                    <div className={styles.search} onClick={onHotelsTextClick}>
                      Hotels
                    </div>
                    <button className={styles.offers}>Offers</button>
                  </div>
                  <div className={styles.accountSection}>
                    <img
                      className={styles.hamburgerMenuIcon}
                      alt=""
                      src="/notification.svg"
                    />
                    <img
                      className={styles.notificationBellIcon}
                      alt=""
                      src="/notification1.svg"
                    />
                    <img
                      className={styles.profilePictureIcon}
                      alt=""
                      src="/top_avatar@2x.png"
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className={styles.searchSection}>
              <div className={styles.bannerGradient} />
              <img
                className={styles.bannerBackground}
                alt=""
                src="/undefined34.png"
              />
              <div className={styles.searchContainer}>
                <div className={styles.title}>
                  <div
                    className={styles.letsExplore}
                  >{`Let’s explore & travel the world`}</div>
                  <div className={styles.findTheBest}>
                    Find the best destinations and the most popular stays!
                  </div>
                </div>
                <div className={styles.searchForm}>
                  <div className={styles.formTitleGroup}>
                    <b className={styles.searchFlights}>Search flights</b>
                    <div className={styles.flightOptions}>
                      <div className={styles.flightType}>
                        <FormControlLabel
                          className={styles.radio}
                          label="Return"
                          labelPlacement="end"
                          control={<Radio size="medium" />}
                        />
                        <FormControlLabel
                          className={styles.radio1}
                          label="One-way"
                          labelPlacement="end"
                          control={
                            <Radio color="primary" checked size="medium" />
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.formInputsRow}>
                    <div className={styles.inputsRow}>
                      <div className={styles.inputGroup}>
                        <Autocomplete
                          className={styles.selectoutlined}
                          size="medium"
                          disablePortal
                          options={[
                            "Singapore (SIN)",
                            "Sydney (SYD)",
                            "Siem Reap (REP)",
                            "Shanghai (PVG)",
                            "Sanya (SYX)",
                          ]}
                          renderInput={(params: any) => (
                            <TextField
                              {...params}
                              color="primary"
                              label="Departure"
                              variant="outlined"
                              placeholder=""
                              helperText=""
                            />
                          )}
                          defaultValue="Singapore -  Changi (SIN)"
                        />
                      </div>
                      <div className={styles.inputGroup}>
                        <Autocomplete
                          className={styles.selectoutlined}
                          size="medium"
                          sx={{ width: "100%" }}
                          disablePortal
                          options={[
                            "Clark (CRK)",
                            "Launceston (LST)",
                            "Kalibo (KLO)",
                            "Colombo CMB",
                            "Melbourne (AVV)",
                            "Los Angeles (LA)",
                          ]}
                          renderInput={(params: any) => (
                            <TextField
                              {...params}
                              color="primary"
                              label="Arrival"
                              variant="outlined"
                              placeholder=""
                              helperText=""
                            />
                          )}
                          defaultValue="Los Angeles (LA)"
                        />
                      </div>
                      <div className={styles.inputGroup}>
                        <div className={styles.selectoutlined}>
                          <DatePicker
                            label="Date"
                            value={selectOutlinedDateTimePickerValue}
                            onChange={(newValue: any) => {
                              setSelectOutlinedDateTimePickerValue(newValue);
                            }}
                            slotProps={{
                              textField: {
                                variant: "outlined",
                                size: "medium",
                                fullWidth: true,
                                color: "primary",
                              },
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.buttonGroup}>
                      <button
                        className={styles.searchFlightsButton}
                        onClick={onSearchFlightsButtonClick}
                      >
                        <div className={styles.button}>Search flights</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.homeContents}>
            <div className={styles.upcomingFlightSection}>
              <b className={styles.upcomingFlight}>Upcoming Flight</b>
              <div className={styles.flightDetails}>
                <div className={styles.flightMainContainer}>
                  <div className={styles.toAndFrom}>
                    <div className={styles.fromDetails}>
                      <b className={styles.sin}>SIN</b>
                      <div className={styles.singapore}>Singapore</div>
                    </div>
                    <div className={styles.duration}>
                      <b className={styles.h55m}>15H 55M</b>
                      <img
                        className={styles.flightIcons}
                        alt=""
                        src="/undefined35.png"
                      />
                    </div>
                    <div className={styles.toDetails}>
                      <b className={styles.lax}>LAX</b>
                      <div className={styles.losAngeles}>Los Angeles</div>
                    </div>
                  </div>
                  <div className={styles.horizontalLine} />
                  <div className={styles.departureDetails}>
                    <div className={styles.departsOn1}>
                      Departs on: 1 May, 08:00 AM
                    </div>
                    <div className={styles.daysToGoContainer}>
                      <b>4 days</b>
                      <span> to go</span>
                    </div>
                  </div>
                </div>
                <div className={styles.lineSeparator} />
                <div className={styles.prepareMenu}>
                  <div className={styles.prepareForYour}>
                    Prepare for your trip
                  </div>
                  <div className={styles.tripMenus}>
                    <button className={styles.hotel} onClick={onHotelClick}>
                      <img
                        className={styles.hotelIcon}
                        alt=""
                        src="/undefined36.png"
                      />
                      <div className={styles.hotel1}>Hotel</div>
                    </button>
                    <button className={styles.hotel}>
                      <div className={styles.attractionsIcon}>
                        <div className={styles.background} />
                        <img
                          className={styles.ticketIcon}
                          alt=""
                          src="/undefined37.png"
                        />
                      </div>
                      <div className={styles.attractions1}>Attractions</div>
                    </button>
                    <button className={styles.hotel}>
                      <img
                        className={styles.hotelIcon}
                        alt=""
                        src="/undefined38.png"
                      />
                      <div className={styles.attractions1}>Eats</div>
                    </button>
                    <button className={styles.hotel}>
                      <div className={styles.attractionsIcon}>
                        <div className={styles.background1} />
                        <img
                          className={styles.trainIcon}
                          alt=""
                          src="/undefined39.png"
                        />
                      </div>
                      <div className={styles.attractions1}>Commute</div>
                    </button>
                    <button className={styles.hotel}>
                      <div className={styles.taxiIcon}>
                        <div className={styles.background2} />
                        <img
                          className={styles.taxiIcon1}
                          alt=""
                          src="/undefined40.png"
                        />
                      </div>
                      <div className={styles.taxi1}>Taxi</div>
                    </button>
                    <button className={styles.hotel}>
                      <div className={styles.attractionsIcon}>
                        <div className={styles.background3} />
                        <img
                          className={styles.movieIcon}
                          alt=""
                          src="/undefined41.png"
                        />
                      </div>
                      <div className={styles.attractions1}>Movies</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.popDestinationsMain}>
              <div className={styles.destinationsTitles}>
                <div className={styles.titleContainer}>
                  <b className={styles.prepareForYour}>Plan your next trip</b>
                  <b className={styles.mostPopularDestinations}>
                    Most Popular Destinations
                  </b>
                </div>
                <button className={styles.viewAllTop}>
                  <div className={styles.viewAllDestinations}>
                    View all destinations
                  </div>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/undefined42.png"
                  />
                </button>
              </div>
              <div className={styles.cardsContainer}>
                <button className={styles.col1}>
                  <div className={styles.pariscard}>
                    <img
                      className={styles.parisimageIcon}
                      alt=""
                      src="/undefined43.png"
                    />
                    <div className={styles.destinationDetails}>
                      <b className={styles.paris}>Paris</b>
                      <div className={styles.details}>
                        <div className={styles.div}>$699</div>
                        <div className={styles.from}>from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className={styles.col1}>
                  <div className={styles.pariscard}>
                    <img
                      className={styles.parisimageIcon}
                      alt=""
                      src="/undefined44.png"
                    />
                    <div className={styles.destinationDetails}>
                      <b className={styles.paris}>Greece</b>
                      <div className={styles.details1}>
                        <div className={styles.div1}>$1079</div>
                        <div className={styles.from1}>from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className={styles.col1}>
                  <div className={styles.pariscard}>
                    <img
                      className={styles.parisimageIcon}
                      alt=""
                      src="/undefined45.png"
                    />
                    <div className={styles.destinationDetails}>
                      <b className={styles.paris}>Norway</b>
                      <div className={styles.details}>
                        <div className={styles.div}>$895</div>
                        <div className={styles.from}>from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className={styles.col1}>
                  <div className={styles.pariscard}>
                    <img
                      className={styles.parisimageIcon}
                      alt=""
                      src="/undefined46.png"
                    />
                    <div className={styles.destinationDetails}>
                      <b className={styles.paris}>Tuscany</b>
                      <div className={styles.details3}>
                        <div className={styles.div3}>$1245</div>
                        <div className={styles.from3}>from</div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className={styles.viewAllBottom}>
                <div className={styles.viewAllDestinations1}>
                  View all destinations
                </div>
                <img
                  className={styles.arrowRightIcon}
                  alt=""
                  src="/undefined47.png"
                />
              </div>
            </div>
            <div className={styles.recommendedHolidaysContainer}>
              <div className={styles.recTitle}>
                <b className={styles.recommendedHolidays}>
                  Recommended Holidays
                </b>
                <button className={styles.viewAllHolidaysParent}>
                  <div className={styles.viewAllHolidays}>
                    View all holidays
                  </div>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/undefined48.png"
                  />
                </button>
              </div>
              <div className={styles.recCardsContainer}>
                <button className={styles.recCard1}>
                  <img
                    className={styles.unsplash5mv818tzxeoIcon}
                    alt=""
                    src="/undefined49.png"
                  />
                  <div className={styles.holidayDetails}>
                    <div className={styles.recTitle}>
                      <div className={styles.baliParent}>
                        <div className={styles.bali}>Bali</div>
                        <div className={styles.d3n}>4D3N</div>
                      </div>
                      <div className={styles.div4}>$899</div>
                    </div>
                  </div>
                </button>
                <button className={styles.recCard1}>
                  <img
                    className={styles.unsplash5mv818tzxeoIcon}
                    alt=""
                    src="/undefined50.png"
                  />
                  <div className={styles.holidayDetails}>
                    <div className={styles.recTitle}>
                      <div className={styles.baliParent}>
                        <div className={styles.bali}>Swiss</div>
                        <div className={styles.d3n}>6D5N</div>
                      </div>
                      <div className={styles.div4}>$900</div>
                    </div>
                  </div>
                </button>
                <button className={styles.recCard3}>
                  <img
                    className={styles.unsplash5mv818tzxeoIcon}
                    alt=""
                    src="/undefined51.png"
                  />
                  <div className={styles.holidayDetails}>
                    <div className={styles.recTitle}>
                      <div className={styles.baliParent}>
                        <div className={styles.bali}>Boracay</div>
                        <div className={styles.d3n}>5D4N</div>
                      </div>
                      <div className={styles.div4}>$699</div>
                    </div>
                  </div>
                </button>
                <button className={styles.recCard4}>
                  <img
                    className={styles.unsplash5mv818tzxeoIcon}
                    alt=""
                    src="/undefined52.png"
                  />
                  <div className={styles.holidayDetails}>
                    <div className={styles.recTitle}>
                      <div className={styles.baliParent}>
                        <div className={styles.bali}>Palawan</div>
                        <div className={styles.d3n}>4D3N</div>
                      </div>
                      <div className={styles.div4}>$789</div>
                    </div>
                  </div>
                </button>
              </div>
              <div className={styles.viewAllBottom1}>
                <div className={styles.viewAllHolidays1}>View all holidays</div>
                <img
                  className={styles.arrowRightIcon}
                  alt=""
                  src="/undefined53.png"
                />
              </div>
            </div>
            <form className={styles.popularStays}>
              <div className={styles.popularStaysHeader}>
                <div className={styles.popularStaysTitle}>
                  <b className={styles.popularStays1}>Popular Stays</b>
                </div>
                <button
                  className={styles.viewAllStaysButton}
                  onClick={onViewAllStaysButtonClick}
                >
                  <div className={styles.viewAllStays}>View all stays</div>
                  <img
                    className={styles.arrowRightIcon}
                    alt=""
                    src="/undefined48.png"
                  />
                </button>
              </div>
              <div className={styles.hotelCards}>
                <div className={styles.hotelCard1}>
                  <div className={styles.hotelCard}>
                    <img
                      className={styles.matterhornSuitesImage}
                      alt=""
                      src="/undefined54.png"
                    />
                    <div className={styles.stayDetails}>
                      <div className={styles.stayDetailsRows}>
                        <div className={styles.entireBungalow}>
                          Entire bungalow
                        </div>
                        <b className={styles.matterhornSuites}>
                          Matterhorn Suites
                        </b>
                        <div className={styles.night}>$575/night</div>
                      </div>
                      <img
                        className={styles.videoIcon}
                        alt=""
                        src="/undefined55.png"
                        onClick={openMatterhornPopup}
                      />
                    </div>
                    <div className={styles.rating}>
                      <div className={styles.reviews}>(60 reviews)</div>
                      <div className={styles.parent}>
                        <div className={styles.div8}>4.9</div>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/undefined56.png"
                        />
                      </div>
                    </div>
                    <div className={styles.moreDetailsButton}>
                      <div className={styles.button1}>More details</div>
                    </div>
                  </div>
                </div>
                <div className={styles.hotelCard1}>
                  <div className={styles.hotelCard}>
                    <img
                      className={styles.matterhornSuitesImage}
                      alt=""
                      src="/undefined57.png"
                    />
                    <div className={styles.stayDetails1}>
                      <div className={styles.stayDetailsRows}>
                        <div className={styles.entireBungalow}>
                          2-Story beachfront suite
                        </div>
                        <b className={styles.matterhornSuites}>
                          Discovery Shores
                        </b>
                        <div className={styles.night}>$360/night</div>
                      </div>
                    </div>
                    <div className={styles.rating}>
                      <div className={styles.reviews}>(116 reviews)</div>
                      <div className={styles.parent}>
                        <div className={styles.div8}>4.8</div>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/undefined58.png"
                        />
                      </div>
                    </div>
                    <div className={styles.moreDetailsButton}>
                      <div className={styles.button1}>More details</div>
                    </div>
                  </div>
                </div>
                <div className={styles.hotelCard1}>
                  <div className={styles.hotelCard4}>
                    <img
                      className={styles.matterhornSuitesImage}
                      alt=""
                      src="/undefined59.png"
                    />
                    <div className={styles.stayDetails1}>
                      <div className={styles.stayDetailsRows}>
                        <div className={styles.entireBungalow}>
                          Single deluxe hut
                        </div>
                        <b className={styles.arcticHut}>{`Arctic Hut `}</b>
                        <div className={styles.night}>$420/night</div>
                      </div>
                    </div>
                    <div className={styles.rating}>
                      <div className={styles.reviews2}>(78 reviews)</div>
                      <div className={styles.container}>
                        <div className={styles.div10}>4.7</div>
                        <img
                          className={styles.vectorIcon2}
                          alt=""
                          src="/undefined60.png"
                        />
                      </div>
                    </div>
                    <div className={styles.moreDetailsButton}>
                      <div className={styles.button1}>More details</div>
                    </div>
                  </div>
                </div>
                <div className={styles.hotelCard41}>
                  <div className={styles.hotelCard5}>
                    <img
                      className={styles.matterhornSuitesImage}
                      alt=""
                      src="/undefined61.png"
                    />
                    <div className={styles.stayDetails}>
                      <div className={styles.stayDetailsRows}>
                        <div className={styles.entireBungalow}>
                          Deluxe King Room
                        </div>
                        <b className={styles.arcticHut}>Lake Louise Inn</b>
                        <div className={styles.night}>$244/night</div>
                      </div>
                      <img
                        className={styles.videoIcon}
                        alt=""
                        src="/undefined62.png"
                        onClick={openMatterhornPopup1}
                      />
                    </div>
                    <div className={styles.rating}>
                      <div className={styles.reviews}>(63 reviews)</div>
                      <div className={styles.parent}>
                        <div className={styles.div8}>4.6</div>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/undefined63.png"
                        />
                      </div>
                    </div>
                    <div className={styles.moreDetailsButton}>
                      <div className={styles.button1}>More details</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.mobileViewAllStays}>
                <div className={styles.viewAllStays1}>View all stays</div>
                <img
                  className={styles.arrowRightIcon}
                  alt=""
                  src="/undefined64.png"
                />
              </div>
            </form>
          </div>
          <div className={styles.footerSection}>
            <div className={styles.subscribeSection}>
              <img
                className={styles.subscribeSectionBackground}
                alt=""
                src="/undefined65.png"
              />
              <div className={styles.shareYourTravelsForm}>
                <div className={styles.formHeader}>
                  <b className={styles.prepareForYour}>
                    subscribe to our newsletter
                  </b>
                  <b className={styles.formTitle}>Get weekly updates</b>
                </div>
                <div className={styles.form}>
                  <div className={styles.formText}>
                    <div className={styles.fillInYour}>
                      Fill in your details to join the party!
                    </div>
                  </div>
                  <div className={styles.formFields}>
                    <div className={styles.formText}>
                      <TextField
                        className={styles.input}
                        color="primary"
                        label="Your name"
                        size="medium"
                        variant="outlined"
                        type="text"
                      />
                    </div>
                    <div className={styles.formText}>
                      <TextField
                        className={styles.input}
                        color="primary"
                        label="Email address"
                        size="medium"
                        variant="outlined"
                        type="text"
                      />
                    </div>
                  </div>
                  <button className={styles.button5}>
                    <div className={styles.unstyledbutton}>
                      <div className={styles.button6}>submit</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <footer className={styles.footer}>
              <div className={styles.fickleflightBio}>
                <img
                  className={styles.logoIcon}
                  alt=""
                  src="/undefined66.png"
                />
                <div className={styles.fickleFlightIs}>
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <img
                  className={styles.socialIcons}
                  alt=""
                  src="/undefined67.png"
                />
              </div>
              <div className={styles.footerChild} />
              <div className={styles.footerLinks}>
                <div className={styles.company}>
                  <div className={styles.aboutUs}>About Us</div>
                  <div className={styles.company1}>Company</div>
                  <div className={styles.news}>News</div>
                  <div className={styles.careers}>Careers</div>
                  <div className={styles.howWeWork}>How we work</div>
                </div>
                <div className={styles.company}>
                  <div className={styles.account}>Account</div>
                  <div className={styles.support1}>Support</div>
                  <div className={styles.supportCenter}>Support Center</div>
                  <div className={styles.faq}>FAQ</div>
                  <div className={styles.accessibility}>Accessibility</div>
                </div>
                <div className={styles.more}>
                  <div className={styles.covidAdvisory}>Covid Advisory</div>
                  <div className={styles.more1}>More</div>
                  <div className={styles.airlineFees}>Airline Fees</div>
                  <div className={styles.tips}>Tips</div>
                  <div className={styles.howWeWork}>Quarantine Rules</div>
                </div>
              </div>
            </footer>
          </div>
        </div>
        {isMatterhornPopupOpen && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup}
          >
            <MatterhornPopup onClose={closeMatterhornPopup} />
          </PortalPopup>
        )}
        {isMatterhornPopup1Open && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup1}
          >
            <MatterhornPopup onClose={closeMatterhornPopup1} />
          </PortalPopup>
        )}
      </>
    </LocalizationProvider>
  );
};

export default Homepage;
