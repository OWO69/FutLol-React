import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>FutLol</title>
        <meta name="description" content="Futsal meets Lol\nSamba meets moba" />
        <meta property="og:title" content="FutLol" />
        <meta
          property="og:description"
          content="Futsal meets Lol\nSamba meets moba"
        />
      </Helmet>
      <header data-role="Header" className="home-header">
        <div className="home-max-width">
          <a href="#top" className="home-link">
            <img
              alt="logo"
              src="/Logos/futlol-400h.png"
              className="home-image"
            />
          </a>
          <div className="home-nav">
            <nav className="home-nav1">
              <a href="#Overview" className="home-link1">
                Overview
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </a>
              <a href="#process" className="home-link2 Navigation-Link">
                Process
              </a>
              <a href="#Lore" className="home-link3">
                Lore
              </a>
              <a href="#Postions" className="home-link4">
                Positions
              </a>
            </nav>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="mobile-menu">
            <div className="home-nav2">
              <div className="home-container01">
                <img alt="image" src="/Logos/logo1-1500h.png" />
                <div
                  data-role="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="navigation-links-root-class-name9"></NavigationLinks>
              <button className="button-secondary button button-md">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="home-main">
        <div id="top" className="home-hero section-container">
          <div className="home-max-width01 max-content-container">
            <div className="home-heading-container">
              <h1 className="home-text">
                <span>Moba Bonito</span>
                <br></br>
              </h1>
              <span className="home-text003">
                <span>Football gameplay gets a new tower defense twist</span>
                <br></br>
                <span>
                  Funky Cards with whimsical lore &amp; pog powers
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
              <button className="home-primary button-primary button-lg button">
                Mint
              </button>
            </div>
            <div className="home-gallery">
              <div className="home-container02">
                <img
                  alt="image"
                  src="/cards/alad%20spearer-600w.png"
                  className="home-image002"
                />
                <img
                  alt="image"
                  src="/cards/halojacket-600w.png"
                  className="home-image003"
                />
              </div>
              <div className="home-container03">
                <img
                  alt="image"
                  src="/cards/egge-600w.png"
                  className="home-image004"
                />
                <img
                  alt="image"
                  src="/cards/king%20dober-600w.png"
                  className="home-image005"
                />
              </div>
              <div className="home-container04">
                <img
                  alt="image"
                  src="/cards/firemino-600w.png"
                  className="home-image006"
                />
                <img
                  alt="image"
                  src="/cards/mardi%20donna-600w.png"
                  className="home-image007"
                />
              </div>
              <div className="home-container05">
                <img
                  alt="image"
                  src="/cards/juarez-600w.png"
                  className="home-image008"
                />
                <img
                  alt="image"
                  src="/cards/permaid-600w.png"
                  className="home-image009"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="Overview" className="home-services section-container">
          <div className="home-max-width02 max-content-container">
            <div className="home-heading-container1">
              <div className="home-text-container">
                <h2>Overview &amp; Specs</h2>
              </div>
            </div>
            <div className="home-cards-container">
              <div className="home-services-card services-card">
                <div className="home-container06">
                  <img
                    alt="image"
                    src="/Logos/website-200h.png"
                    className="home-image010"
                  />
                </div>
                <span className="home-text009">FUTLOL</span>
                <span className="home-text010">
                  <span>Futsal meets LoL</span>
                  <br></br>
                  <span>5 a side </span>
                  <br></br>
                  <span>
                    Impossible field meets Good vs Evil in this epic 5 a side
                    showdown with tower defense game meets ball kicking goalfest
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-services-card1 services-card">
                <div className="home-container07">
                  <img
                    alt="image"
                    src="/Logos/file-document-200w.png"
                    className="home-image011"
                  />
                </div>
                <span className="home-text017">ERC404</span>
                <span className="home-text018">
                  Erc721 meets Erc 20 with our erc404
                </span>
              </div>
              <div className="home-services-card2 services-card">
                <div className="home-container08">
                  <img
                    alt="image"
                    src="/Logos/dice-5-200h.png"
                    className="home-image012"
                  />
                </div>
                <span className="home-text019">Random Rarity</span>
                <span className="home-text020">
                  Pi Day mint gives random rarity cards
                </span>
              </div>
            </div>
            <div className="home-cards-container1">
              <div className="home-services-card3 services-card">
                <div className="home-container09">
                  <img
                    alt="image"
                    src="/Logos/eye-200h.png"
                    className="home-image013"
                  />
                </div>
                <span className="home-text021">Semi Open Source aka sauce</span>
                <span className="home-text022">
                  <span>
                    We&apos;ll be sharing our process &amp; code with our
                    initial minters
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-services-card4 services-card">
                <div className="home-container10">
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
                  </svg>
                </div>
                <span className="home-text025">In game rights</span>
                <span className="home-text026">
                  Ownership of in game assets
                </span>
              </div>
              <div className="home-services-card5 services-card">
                <div className="home-container11">
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M639.403 658.091l32 241.152-137.429-82.475c-13.269-7.851-29.995-8.363-43.904 0l-137.429 82.475 32.043-241.109c39.296 15.829 82.304 24.533 127.317 24.533s88.021-8.747 127.403-24.576zM654.165 554.283c-2.475 1.28-4.821 2.773-6.955 4.48-39.253 24.448-85.547 38.571-135.211 38.571-70.699 0-134.656-28.587-181.035-74.965s-74.965-110.336-74.965-181.035 28.587-134.656 74.965-181.035 110.336-74.965 181.035-74.965 134.656 28.587 181.035 74.965 74.965 110.336 74.965 181.035-28.587 134.656-74.965 181.035c-11.861 11.861-24.875 22.571-38.869 31.915zM304.64 612.48l-48.256 363.221c-3.115 23.339 13.312 44.8 36.693 47.915 9.984 1.323 19.669-0.939 27.563-5.717l191.36-114.816 191.403 114.816c20.224 12.117 46.421 5.589 58.539-14.635 5.205-8.661 6.955-18.389 5.717-27.563l-48.213-363.307c11.947-9.173 23.296-19.115 33.92-29.739 61.696-61.696 99.968-147.072 99.968-241.323s-38.272-179.627-99.968-241.365-147.115-99.968-241.365-99.968-179.627 38.272-241.365 99.968-99.968 147.115-99.968 241.365 38.272 179.627 99.968 241.365c10.667 10.667 22.016 20.608 33.963 29.781z"></path>
                  </svg>
                </div>
                <span className="home-text027">Badge of Honor</span>
                <span className="home-text028">
                  {' '}
                  Ability to suggest new characters on telegram
                </span>
              </div>
            </div>
          </div>
          <div className="home-container12"></div>
        </div>
        <div id="process" className="section-container">
          <div className="home-max-width03 max-content-container">
            <div className="home-text-container1">
              <h2 className="home-text029 Heading2">Mint Process</h2>
            </div>
            <div className="home-tab-selector-cards-container">
              <div className="home-speaker-card">
                <div className="home-image-container">
                  <img
                    alt="image"
                    src="/info/piday-400h.jpg"
                    className="home-image014"
                  />
                </div>
                <span className="home-first-name">
                  <span>3141 ERC 721 NFTs celebrating Pi Day</span>
                  <br></br>
                </span>
              </div>
              <div className="home-speaker-card1">
                <div className="home-image-container1">
                  <img
                    alt="image"
                    src="/cards/rarity%20chart-400h.png"
                    className="home-image015"
                  />
                </div>
                <span className="home-first-name1">
                  Varied positions &amp; rarity on reveal
                </span>
              </div>
              <div className="home-speaker-card2">
                <div className="home-image-container2">
                  <img
                    alt="image"
                    src="/Logos/futlol-400h.png"
                    className="home-image016"
                  />
                </div>
                <span className="home-first-name2">
                  <span>Game Beta launch on Android</span>
                  <br></br>
                </span>
              </div>
              <div className="home-speaker-card3">
                <div className="home-image-container3">
                  <img
                    alt="image"
                    src="/cards/aquameyang-400h.png"
                    className="home-image017"
                  />
                </div>
                <span className="home-first-name3">
                  In game random card mint based on position &amp; rarity
                </span>
              </div>
              <div className="home-speaker-card4">
                <div className="home-image-container4">
                  <img
                    alt="image"
                    src="/info/beach%20football-400h.jpg"
                    className="home-image018"
                  />
                </div>
                <span className="home-first-name4">
                  Voting &amp; improvement rights for in game assets through
                  Telegram
                </span>
              </div>
              <div className="home-speaker-card5">
                <div className="home-image-container5">
                  <img
                    alt="image"
                    src="/info/gameplay-400h.jpg"
                    className="home-image019"
                  />
                </div>
                <span className="home-first-name5">
                  <span>Public launch &amp; promotion</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="Rarity" className="home-about section-container">
          <div className="home-max-width04 max-content-container">
            <div className="home-text-container2">
              <h2 className="home-text036">
                <span>Rarity Chart</span>
                <br></br>
              </h2>
              <div className="home-checklist">
                <div className="home-check-item">
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text039">
                    Rare is the lowest rarity, where&apos;s common u ask, non
                    crypto natives start with that
                  </span>
                </div>
                <div className="home-check-item1">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text040">
                    <span>
                      In game currency will be used to upgrade card rarities
                    </span>
                    <br></br>
                  </span>
                </div>
                <div className="home-check-item2">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text043">
                    Higher rarity higher powers, basically xp or levelling
                    system for rarities
                  </span>
                </div>
                <div className="home-check-item3">
                  <svg viewBox="0 0 1024 1024" className="home-icon14">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text044">
                    ERC 20 coin 𝜋 captures leveling value as it can be exchanged
                    for in game levelling currency
                  </span>
                  <img
                    alt="image"
                    src="/Logos/octagon-200w.png"
                    className="home-image020"
                  />
                </div>
                <div className="home-check-item4">
                  <svg viewBox="0 0 1024 1024" className="home-icon16">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text045">
                    Follows the VIBGYOR color grading for rarity for the first 7
                    rarities
                  </span>
                </div>
                <div className="home-check-item5">
                  <svg viewBox="0 0 1024 1024" className="home-icon18">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text046">
                    Avanta BlackUnicorn rarity means you get to mint multiple
                    top end rarity cards and some gamechanging benefits
                  </span>
                </div>
              </div>
            </div>
            <div className="home-image-container6">
              <img
                alt="image"
                src="/info/rarity%20chart-1000w.jpg"
                className="home-image021"
              />
            </div>
          </div>
        </div>
        <div id="Lore" className="section-container">
          <div className="home-max-width05 max-content-container">
            <h2 className="home-text047 Heading2">Player Lore</h2>
            <div className="home-blog-cards-container">
              <div className="home-blog-card">
                <img
                  alt="image"
                  src="/cards/carlis%20angel-600w.png"
                  className="home-image022"
                />
                <img
                  alt="image"
                  src="/Logos/glovesofsafety-200h.png"
                  className="home-image023"
                />
                <span className="home-text048">
                  Carlis Angel is an assassin from Jersey City well versed in
                  the art of slicing and dicing any attack
                </span>
              </div>
              <div className="home-blog-card01">
                <img
                  alt="image"
                  src="/cards/sir%20g%20ross-600w.png"
                  className="home-image024"
                />
                <img
                  alt="image"
                  src="/Logos/daggersofdefense-200h.png"
                  className="home-image025"
                />
                <span className="home-text049">
                  Sir Gio Ramos is the defender of Mad Ridge city of Portsmouth
                </span>
              </div>
              <div className="home-blog-card02">
                <img
                  alt="image"
                  src="/cards/cyborgo%20karpe-600w.png"
                  className="home-image026"
                />
                <img
                  alt="image"
                  src="/Logos/midshield-200h.png"
                  className="home-image027"
                />
                <span className="home-text050">
                  Cyborgo Korpe is an cybernetic engine that never never never
                  stops running
                </span>
              </div>
              <div className="home-blog-card03">
                <img
                  alt="image"
                  src="/cards/draculatov-600w.png"
                  className="home-image028"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image029"
                />
                <span className="home-text051">
                  Draculatov is the estate owner of kingdom of Bull garia and
                  spends his time curating art collection after his daily dose
                  of poaching trespassing visitors
                </span>
              </div>
            </div>
          </div>
          <div className="home-max-width06 max-content-container">
            <div className="home-blog-cards-container01">
              <div className="home-blog-card04">
                <img
                  alt="image"
                  src="/cards/carless%20puyol-600w.png"
                  className="home-image030"
                />
                <img
                  alt="image"
                  src="/Logos/daggersofdefense-200h.png"
                  className="home-image031"
                />
                <span className="home-text052">
                  Car less Puyol is a leader and champion of cycling and only
                  ever carpools
                </span>
              </div>
              <div className="home-blog-card05">
                <img
                  alt="image"
                  src="/cards/duke%20of%20eden-600w.png"
                  className="home-image032"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image033"
                />
                <span className="home-text053">
                  Duke of Eden spends his time zigzagging through opening lines
                  of opponents
                </span>
              </div>
              <div className="home-blog-card06">
                <img
                  alt="image"
                  src="/cards/el%20chefenomeno-600w.png"
                  className="home-image034"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image035"
                />
                <span className="home-text054">
                  <span>El Chefenomeno cooks</span>
                  <br></br>
                  <span>
                    He taught every AAA tacker the taste of delicate finishes
                    and suave slices &amp; chops
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-blog-card07">
                <img
                  alt="image"
                  src="/cards/fabric%20lass-600w.png"
                  className="home-image036"
                />
                <img
                  alt="image"
                  src="/Logos/midshield-200h.png"
                  className="home-image037"
                />
                <span className="home-text059">
                  Fabric Lass is the baron of class &amp; kashmere
                </span>
              </div>
            </div>
          </div>
          <div className="home-max-width07 max-content-container">
            <div className="home-blog-cards-container02">
              <div className="home-blog-card08">
                <img
                  alt="image"
                  src="/cards/footballrates-600w.png"
                  className="home-image038"
                />
                <img
                  alt="image"
                  src="/Logos/midshield-200h.png"
                  className="home-image039"
                />
                <span className="home-text060">
                  The thinker Footballrates thinks twice, passes once and cuts
                  through 10s
                </span>
              </div>
              <div className="home-blog-card09">
                <img
                  alt="image"
                  src="/cards/goliath%20alaba-600w.png"
                  className="home-image040"
                />
                <img
                  alt="image"
                  src="/Logos/daggersofdefense-200h.png"
                  className="home-image041"
                />
                <span className="home-text061">
                  Goliath Alaba is a gentle giant who controls the game from the
                  backline
                </span>
              </div>
              <div className="home-blog-card10">
                <img
                  alt="image"
                  src="/cards/great%20welsh%20dragon-600w.png"
                  className="home-image042"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image043"
                />
                <span className="home-text062">
                  The Welsh Dragon is a beast of unmatched strength &amp; skill.
                  A true big game player who lives for the thrill of finals 
                </span>
              </div>
              <div className="home-blog-card11">
                <img
                  alt="image"
                  src="/cards/sam%20purr-600w.png"
                  className="home-image044"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image045"
                />
                <span className="home-text063">
                  Sam Purr is a leader of 1000 roosters leading them to a
                  victory against a million dinosaurs. Hard to believe, easier
                  to observe her in action
                </span>
              </div>
            </div>
          </div>
          <div className="home-max-width08 max-content-container">
            <div className="home-blog-cards-container03">
              <div className="home-blog-card12">
                <img
                  alt="image"
                  src="/cards/ninja%20kid-600w.png"
                  className="home-image046"
                />
                <img
                  alt="image"
                  src="/Logos/daggersofdefense-200h.png"
                  className="home-image047"
                />
                <span className="home-text064">
                  Ninja Kid is a player built different practicing 1000 one on
                  ones on a daily basis, some say pressure feels him
                </span>
              </div>
              <div className="home-blog-card13">
                <img
                  alt="image"
                  src="/cards/night%20knight-600w.png"
                  className="home-image048"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image049"
                />
                <span className="home-text065">
                  Knightfall has the highest KDS (kill death score) in the
                  queendom. yeah got renamed
                </span>
              </div>
              <div className="home-blog-card14">
                <img
                  alt="image"
                  src="/cards/piretta-600w.png"
                  className="home-image050"
                />
                <img
                  alt="image"
                  src="/Logos/midshield-200h.png"
                  className="home-image051"
                />
                <span className="home-text066">
                  The swashbuckling Pirate Arrteta guns for glory &amp; is on a
                  mission to revitalize the glory of the red seas
                </span>
              </div>
              <div className="home-blog-card15">
                <img
                  alt="image"
                  src="/cards/guiltyman-600w.png"
                  className="home-image052"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image053"
                />
                <span className="home-text067">
                  Gullitman is a crazy revolutionary who chops hands &amp; heads
                  of defenders of Mary Antoniette
                </span>
              </div>
            </div>
          </div>
          <div className="home-max-width09 max-content-container">
            <div className="home-blog-cards-container04">
              <div className="home-blog-card16">
                <img
                  alt="image"
                  src="/cards/mad%20man%20ben-600w.png"
                  className="home-image054"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image055"
                />
                <span className="home-text068">
                  Mad man Ben only turns left and still scores every single
                  time. A model turned mald when he was cursed by the witch
                  doctor for a hairless existence
                </span>
              </div>
              <div className="home-blog-card17">
                <img
                  alt="image"
                  src="/cards/lothar%20muller-600w.png"
                  className="home-image056"
                />
                <div className="home-container13">
                  <img
                    alt="image"
                    src="/Logos/daggersofdefense-200h.png"
                    className="home-image057"
                  />
                  <img
                    alt="image"
                    src="/Logos/midshield-200h.png"
                    className="home-image058"
                  />
                  <img
                    alt="image"
                    src="/Logos/aaa%20tack-200h.png"
                    className="home-image059"
                  />
                </div>
                <span className="home-text069">
                  Lother Muller is the right man for any wrong postion. A
                  connoisseur of culture &amp; cuisine, he&apos;s a lawful good
                  gentleman cruising the world to maintain the balance between
                  order &amp; chaos
                </span>
              </div>
              <div className="home-blog-card18">
                <img
                  alt="image"
                  src="/cards/livuminati-600w.png"
                  className="home-image060"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image061"
                />
                <span className="home-text070">
                  Livuminati is an ancient egyptian pharaoh with access to
                  immortality
                </span>
              </div>
              <div className="home-blog-card19">
                <img
                  alt="image"
                  src="/cards/king%20silva-600w.png"
                  className="home-image062"
                />
                <img
                  alt="image"
                  src="/Logos/midshield-200h.png"
                  className="home-image063"
                />
                <span className="home-text071">
                  King Silva is a champion of hearts ruling worldwide without an
                  army to command
                </span>
              </div>
            </div>
          </div>
          <div className="home-max-width10 max-content-container">
            <div className="home-blog-cards-container05">
              <div className="home-blog-card20">
                <img
                  alt="image"
                  src="/cards/silvaback-600w.png"
                  className="home-image064"
                />
                <img
                  alt="image"
                  src="/Logos/daggersofdefense-200h.png"
                  className="home-image065"
                />
                <span className="home-text072">
                  Silvaback is a veteran of the game humbling new flashy kids
                  with his longevity &amp; class. Can toe to toe any upstart
                  anyday
                </span>
              </div>
              <div className="home-blog-card21">
                <img
                  alt="image"
                  src="/cards/silk%20farmer-600w.png"
                  className="home-image066"
                />
                <img
                  alt="image"
                  src="/Logos/midshield-200h.png"
                  className="home-image067"
                />
                <span className="home-text073">
                  Silk Trader Mesoo is a kashmere merchant, moves like butter
                  only smoother
                </span>
              </div>
              <div className="home-blog-card22">
                <img
                  alt="image"
                  src="/cards/sicillian%20de%20spanish-600w.png"
                  className="home-image068"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image069"
                />
                <span className="home-text074">
                  sicillian de spanish is the fastest to scale everest, dive to
                  mariana, sail around the world in 69 days
                </span>
              </div>
              <div className="home-blog-card23">
                <img
                  alt="image"
                  src="/cards/stardo%20kaka-600w.png"
                  className="home-image070"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image071"
                />
                <span className="home-text075">
                  <span>Stardo Kaka a phantom a galactico a milano</span>
                  <br></br>
                  <span>
                    Known by a 100 names but for only thing, scoring sensational
                    long dribbling goals and looking good at it
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-blog-cards-container06">
              <div className="home-blog-card24">
                <img
                  alt="image"
                  src="/cards/threelegovic-600w.png"
                  className="home-image072"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image073"
                />
                <span className="home-text080">
                  Threelegovic is a Taekwando trainee who also dabbles in
                  football, blessed with the trifecta of showboating, power and
                  finesse balancing an insurmountable ego 
                </span>
              </div>
              <div className="home-blog-card25">
                <img
                  alt="image"
                  src="/cards/twooney-600w.png"
                  className="home-image074"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image075"
                />
                <span className="home-text081">
                  Twooneys Tom &amp; Wayne are lads with humble upbringings
                  humbling humongous beings
                </span>
              </div>
              <div className="home-blog-card26">
                <img
                  alt="image"
                  src="/cards/siuperram-600w.png"
                  className="home-image076"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image077"
                />
                <span className="home-text082">
                  Monsiuur Ramnaldo has a thing for fashion &amp; records and is
                  willing to go to any length to prove his legend over any one
                  including goats of Paris Catalonia or Miami
                </span>
              </div>
              <div className="home-blog-card27">
                <img
                  alt="image"
                  src="/cards/nebula%20commando-600w.png"
                  className="home-image078"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image079"
                />
                <span className="home-text083">
                  Nebula Commando is a space warrior proving his resourcefulness
                  with efficiency &amp; efficacy wherever he goes. Heeds no
                  attention to boos or laurels, only goes about his business
                </span>
              </div>
            </div>
            <div className="home-blog-cards-container07">
              <div className="home-blog-card28">
                <img
                  alt="image"
                  src="/cards/alad%20spearer-600w.png"
                  className="home-image080"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image081"
                />
                <span className="home-text084">
                  Alad Spearer is a primal legend whose technique wrote records
                  even modern magnates with swathes of team to guide them find
                  hard to crack
                </span>
              </div>
              <div className="home-blog-card29">
                <img
                  alt="image"
                  src="/cards/egge-600w.png"
                  className="home-image082"
                />
                <img
                  alt="image"
                  src="/Logos/daggersofdefense-200h.png"
                  className="home-image083"
                />
                <span className="home-text085">
                  Egge lives for the challenge, ready to take on any bull goat
                  or vampire head on
                </span>
              </div>
              <div className="home-blog-card30">
                <img
                  alt="image"
                  src="/cards/dolpher-600w.png"
                  className="home-image084"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image085"
                />
                <span className="home-text086">
                  Adiva Jr is a crowdpleaser skillshow learning on the beaches
                  of brazil. He maybe a diver but he&apos;s also a diva, still
                  shows lack of discipline &amp; commitment, comes with the
                  territory I guess
                </span>
              </div>
              <div className="home-blog-card31">
                <img
                  alt="image"
                  src="/cards/dr%20petr%20tentec-600w.png"
                  className="home-image086"
                />
                <img
                  alt="image"
                  src="/Logos/glovesofsafety-200h.png"
                  className="home-image087"
                />
                <span className="home-text087">
                  Dr Petr Tentech is a London Legend whose stories of saves
                  spans as long his tentacles
                </span>
              </div>
            </div>
            <div className="home-blog-cards-container08">
              <div className="home-blog-card32">
                <img
                  alt="image"
                  src="/cards/firemino-600w.png"
                  className="home-image088"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image089"
                />
                <span className="home-text088">
                  Firelord Mino is a mystical martial artist, turns the heat on
                  or off with a single touch, an easy task for a master of jiu
                  jitsu
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="home-blog-card33">
                <img
                  alt="image"
                  src="/cards/juarez-600w.png"
                  className="home-image090"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image091"
                />
                <span className="home-text089">
                  Juarez comes from an alternative timeline where dinos evolved
                  without extinction events, someone bit the meteors me thinks
                </span>
              </div>
              <div className="home-blog-card34">
                <img
                  alt="image"
                  src="/cards/mardi%20donna-600w.png"
                  className="home-image092"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image093"
                />
                <span className="home-text090">
                  Mardi Donna is the OG showboat warrior, dogged attacking and a
                  flair of flash &amp; smash
                </span>
              </div>
              <div className="home-blog-card35">
                <img
                  alt="image"
                  src="/cards/king%20dober-600w.png"
                  className="home-image094"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image095"
                />
                <span className="home-text091">
                  King Dober comes from the planet badboia where he stopped an
                  uncivil war with a single bark
                </span>
              </div>
            </div>
            <div className="home-blog-cards-container09">
              <div className="home-blog-card36">
                <img
                  alt="image"
                  src="/cards/die%20goddies-600w.png"
                  className="home-image096"
                />
                <img
                  alt="image"
                  src="/Logos/daggersofdefense-200h.png"
                  className="home-image097"
                />
                <span className="home-text092">
                  Die Goddies is a legend hunter. goats, gods or metahumans are
                  just meat for this athletic mad man
                </span>
              </div>
              <div className="home-blog-card37">
                <img
                  alt="image"
                  src="/cards/devil%20bull-600w.png"
                  className="home-image098"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image099"
                />
                <span className="home-text093">
                  Devil Costa born &amp; bred in bull hell he&apos;s aged a leap
                  year every year
                </span>
              </div>
              <div className="home-blog-card38">
                <img
                  alt="image"
                  src="/cards/cameldo-600w.png"
                  className="home-image100"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image101"
                />
                <span className="home-text094">
                  Cameldo is a moneymaker who even after being champion after
                  champion couldn&apos;t get any quarters at the world condo,
                  now he&apos;s just sheikhing it off
                </span>
              </div>
              <div className="home-blog-card39">
                <img
                  alt="image"
                  src="/cards/cam%20tona-600w.png"
                  className="home-image102"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image103"
                />
                <span className="home-text095">
                  Cam Donna carves poetry with pics, converts moments into
                  momentos. Also covers secret tournaments onto faraway worlds
                </span>
              </div>
            </div>
            <div className="home-blog-cards-container10">
              <div className="home-blog-card40">
                <img
                  alt="image"
                  src="/cards/juninho-600w.png"
                  className="home-image104"
                />
                <img
                  alt="image"
                  src="/Logos/midshield-200h.png"
                  className="home-image105"
                />
                <span className="home-text096">
                  Duneinho is a space miner whose instinct kicks in as soon as
                  he sees any dead ball, Mines every dead ball 60% of the time
                </span>
              </div>
              <div className="home-blog-card41">
                <img
                  alt="image"
                  src="/cards/milking-600w.png"
                  className="home-image106"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image107"
                />
                <span className="home-text097">
                  Milking is the nord dadbod god who is now doing hot vegan yoga
                  to get back in shape
                </span>
              </div>
              <div className="home-blog-card42">
                <img
                  alt="image"
                  src="/cards/guard%20catalonya-600w.png"
                  className="home-image108"
                />
                <img
                  alt="image"
                  src="/Logos/midshield-200h.png"
                  className="home-image109"
                />
                <span className="home-text098">
                  Guard Oiler is a city soul who sold his Ford for an EV and now
                  oversees an academy
                </span>
              </div>
              <div className="home-blog-card43">
                <img
                  alt="image"
                  src="/cards/goblinho-600w.png"
                  className="home-image110"
                />
                <img
                  alt="image"
                  src="/Logos/aaa%20tack-200h.png"
                  className="home-image111"
                />
                <span className="home-text099">
                  Goblinho is a being with a a bagfull of gem of tricks, rabona,
                  elastico, feints he&apos;s got it all and then some
                </span>
              </div>
            </div>
            <div className="home-blog-cards-container11">
              <div className="home-blog-card44">
                <img
                  alt="image"
                  src="/cards/halojacket-600w.png"
                  className="home-image112"
                />
                <img
                  alt="image"
                  src="/Logos/midshield-200h.png"
                  className="home-image113"
                />
                <span className="home-text100">
                  Haloloid is a woman from an ancient resource richie rich rich
                  civilization who has seen more wars than days, now spends her
                  time guiding others to a treasure she couldn&apos;t possess.
                  greed divides, football unites
                </span>
              </div>
              <div className="home-blog-card45">
                <img
                  alt="image"
                  src="/cards/permaid-600w.png"
                  className="home-image114"
                />
                <img
                  alt="image"
                  src="/Logos/daggersofdefense-200h.png"
                  className="home-image115"
                />
                <span className="home-text101">
                  Permaid is a Scottish Loch ness mermaid who runs an academy
                  for amateurs who want to turn pro maybe 
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="Postions" className="home-process section-container">
          <div className="home-max-width11 max-content-container">
            <div className="home-container14">
              <h2 className="home-text102">Positions</h2>
              <img
                alt="image"
                src="/Logos/goal-200h.png"
                className="home-image116"
              />
            </div>
            <div className="home-step">
              <span className="home-text103">01</span>
              <img
                alt="image"
                src="/Logos/glovesofsafety-200h.png"
                className="home-image117"
              />
              <div className="home-container15">
                <span className="home-text104">Gloves of Safety</span>
                <span className="home-text105">
                  Goal stoppers with heightened sense of control &amp;
                  distribution skills
                </span>
              </div>
            </div>
            <div className="home-step1">
              <span className="home-text106">02</span>
              <div className="home-container16">
                <span className="home-text107">Daggers of Defense</span>
                <span className="home-text108">
                  Pillars of strength that can puncture any inflated egos
                  delusion
                </span>
              </div>
              <img
                alt="image"
                src="/Logos/daggersofdefense-200h.png"
                className="home-image118"
              />
            </div>
            <div className="home-step2">
              <span className="home-text109">03</span>
              <img
                alt="image"
                src="/Logos/midshield-200h.png"
                className="home-image119"
              />
              <div className="home-container17">
                <span className="home-text110">MidShield</span>
                <span className="home-text111">
                  Chance creators and game pace dictators
                </span>
              </div>
            </div>
            <div className="home-step3">
              <span className="home-text112">04</span>
              <div className="home-container18">
                <span className="home-text113">AAA tack</span>
                <span className="home-text114">
                  Sharp instinct predators ready to turn half chances into goals
                </span>
              </div>
              <img
                alt="image"
                src="/Logos/aaa%20tack-200h.png"
                className="home-image120"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
