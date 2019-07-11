angular.module("myApp", []).controller("newsCtrl", function($scope) {

    $scope.newslist = [{
      "title": "Stanley Security Solutions to Sponsor Award at 2013 NCS4 Conference",
      "link": "http://news.usm.edu/article/stanley-security-solutions-sponsor-award-2013-ncs4-conference",
      "date": "03/19/2013",
      "img": null
    }, { 
      "title": "National Sports Safety Conference and Exhibition Forum Line-Up Announced",
      "link": "http://news.usm.edu/article/national-sports-safety-conference-and-exhibition-forum-line-announced",
      "date": "06/18/2013",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Houston%20Marathon%20Finish%20Line.jpg"
    }, {
      "title": "National Marathon Safety and Security Summit set for Dec. 5-7",
      "link": "http://news.usm.edu/article/national-marathon-safety-and-security-summit-set-dec-5-7",
      "date": "08/29/2017",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/2017%20Marathon%20Banner.jpg"
    }, {
      "title": "Grand Opening of the National Sport Security Laboratory's Research,Training and Operations Center ",
      "link": "http://news.usm.edu/article/grand-opening-national-sport-security-laboratory-s-research-training-and-operations-center",
      "date": "09/05/2017",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/lab%20ribbon.JPG"
    }, {
      "title": "International Experts Meet on Enhancing Sporting Events Security during NCS4/INTERPOL Training Course",
      "link": "http://news.usm.edu/article/international-experts-meet-enhancing-sporting-events-security-during-ncs4interpol-training-c",
      "date": "09/14/2017",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Interpol%201.jpg"
    }, {
      "title": "Safety and Security Summits To Address Mass Shooting in Las Vegas",
      "link": "http://news.usm.edu/article/safety-and-security-summits-address-mass-shooting-las-vegas",
      "date": "11/15/2017",
      "img": null
    }, {
      "title": "NFL Chief of Security to Speak at Safety and Security Summits",
      "link": "http://news.usm.edu/article/nfl-chief-security-speak-safety-and-security-summits",
      "date": "12/05/2017",
      "img": "http://news.usm.edu/sites/default/files/imagecache/article_portrait/lanier%20-%20chief.jpg"
    }, {
      "title": "University of Florida's Chief of Police Receives Safety and Security 'Champion of Change' Award",
      "link": "http://news.usm.edu/article/university-florida-s-chief-police-receives-safety-and-security-champion-change-award",
      "date": "01/23/2018",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/champion.jpeg"
    }, {
      "title": "National Forum Highlights Challenges/Solutions of Open Access Events",
      "link": "http://news.usm.edu/article/national-forum-highlights-challengessolutions-open-access-events",
      "date": "07/25/2013",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/NCS4%20forum%20photo.jpg"
    }, {
      "title": "Senior Level Public Safety Officials Attend NCS4 Sport Event  Risk Management Course in New York City",
      "link": "http://news.usm.edu/article/senior-level-public-safety-officials-attend-ncs4-sport-event-risk-management-course-new-york",
      "date": "10/02/2018",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/risk%20management.jpg"
    }, {
      "title": "Security Director Andrea Cunningham Receives 'Champion of Change' Award",
      "link": "http://news.usm.edu/article/security-director-andrea-cunningham-receives-champion-change-award",
      "date": "06/13/2018",
      "img": "http://news.usm.edu/sites/default/files/imagecache/article_portrait/Andreas%20Profile.jpg"
    }, {
      "title": "Peter Ciaccia to Receive Leadership Award at NCS4 Conference",
      "link": "http://news.usm.edu/article/peter-ciaccia-receive-leadership-award-ncs4-conference",
      "date": "06/11/2018",
      "img": "http://news.usm.edu/sites/default/files/imagecache/article_portrait/Peter_Ciaccia_CP%20photo.jpg"
    }, {
      "title": "High School Athletic, Security Officials Discuss Partnership with NCS4",
      "link": "http://news.usm.edu/article/high-school-athletic-security-officials-discuss-partnership-ncs4",
      "date": "11/08/2012",
      "img": null
    }, {
      "title": "National Hockey League\u00e2\u20ac\u2122s Cunningham Receives Lifetime Achievement Award",
      "link": "http://news.usm.edu/article/national-hockey-league-s-cunningham-receives-lifetime-achievement-award",
      "date": "06/19/2018",
      "img": null
    }, {
      "title": "National Center for Spectator Sports Safety and Security Grows into Worldwide Leader on Eve of Ninth Conference",
      "link": "http://news.usm.edu/article/national-center-spectator-sports-safety-and-security-grows-worldwide-leader-eve-ninth-confer",
      "date": "07/07/2018",
      "img": null
    }, {
      "title": "Sport Facilities to Receive Recognition during National Sports Security Conference",
      "link": "http://news.usm.edu/article/sport-facilities-receive-recognition-during-national-sports-security-conference",
      "date": "06/25/2018",
      "img": null
    }, {
      "title": "Industry Leaders Under 40 to Receive Recognition during National Sports Security Conference",
      "link": "http://news.usm.edu/article/industry-leaders-under-40-receive-recognition-during-national-sports-security-conference-0",
      "date": "06/22/2018",
      "img": null
    }, {
      "title": "Professionals to Receive Recognition during National Sports Security Conference",
      "link": "http://news.usm.edu/article/professionals-receive-recognition-during-national-sports-security-conference-2",
      "date": "06/27/2018",
      "img": null
    },  {
      "title": "USM College of Business and Economic Development, NCS4 Unveil New Video",
      "link": "http://news.usm.edu/article/usm-college-business-and-economic-development-ncs4-unveil-new-video",
      "date": "07/25/2018",
      "img": null
    }, {
      "title": "NCS4/INTERPOL Training Course Addresses Challenges for Major International Sporting Events",
      "link": "http://news.usm.edu/article/ncs4interpol-training-course-addresses-challenges-major-international-sporting-events",
      "date": "04/19/2018",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Lou%20at%20Interpol.jpg"
    }, {
      "title": "NFL's Senior Vice President of Security Keynotes NCS4 Summit",
      "link": "http://news.usm.edu/article/nfl-s-senior-vice-president-security-keynotes-ncs4-summit",
      "date": "01/19/2018",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/NCS4%20029.jpg"
    }, {
      "title": "Share USM's National Sports Security Center Receives Endowment ",
      "link": "http://news.usm.edu/article/usm-s-national-sports-security-center-receives-endowment",
      "date": "03/23/2018",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Lou%20and%20donation.jpeg"
    }, {
      "title": "USM Graduate School Presents Major Awards for 2018 ",
      "link": "http://news.usm.edu/article/usm-graduate-school-presents-major-awards-2018",
      "date": "04/23/2018",
      "img": null
    }, {
      "title": "NCS4 Partners with INTERPOL for New Sports Security Course ",
      "link": "http://news.usm.edu/article/ncs4-partners-interpol-new-sports-security-course",
      "date": "08/21/2017",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/ncs4%20interpol.jpg"
    }, {
      "title": "National Sports Security Laboratory Evaluates Emerging Technologies ",
      "link": "http://news.usm.edu/article/national-sports-security-laboratory-evaluates-emerging-technologies",
      "date": "03/14/2018",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/drone.jpeg"
    }, {
      "title": "NCS4 Releases Current Safety and Security Best Practices",
      "link": "http://news.usm.edu/article/ncs4-releases-current-safety-and-security-best-practices",
      "date": "08/08/2017",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Best%20Practices%202017.jpg"
    }, {
      "title": "Russ Simons Receives Distinguished Leadership Award at National Sports Safety and Security Conference",
      "link": "http://news.usm.edu/article/russ-simons-receives-distinguished-leadership-award-national-sports-safety-and-security-conf",
      "date": "06/28/2017",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Russ.jpeg"
    }, {
      "title": "Facilities to Receive Recognition during National Sports Security Conference",
      "link": "http://news.usm.edu/article/facilities-receive-recognition-during-national-sports-security-conference-2",
      "date": "06/12/2017",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Conference%20Banner%202017.jpg"
    }, {
      "title": "Professionals to Receive Recognition during National Sports Security Conference",
      "link": "http://news.usm.edu/article/professionals-receive-recognition-during-national-sports-security-conference-1",
      "date": "06/14/2017",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Conference%20Banner%202017%20%28004%29.jpg"
    }, {
      "title": "U.S. Olympic Committee's Buendorf to Receive Award at National Sports Security Conference",
      "link": "http://news.usm.edu/article/us-olympic-committee-s-buendorf-receive-award-national-sports-security-conference",
      "date": "06/21/2017",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/LarryBuendorf_print_1.jpg"
    }, {
      "title": "NCS4 Announces Certified Sport Venue Staff (CSVS) Certification",
      "link": "http://news.usm.edu/article/ncs4-announces-certified-sport-venue-staff-csvs-certification",
      "date": "04/20/2017",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/CSVS_v4.jpg"
    }, {
      "title": "Building Resiliency Focus of National Sports Safety and Security Conference",
      "link": "http://news.usm.edu/article/building-resiliency-focus-national-sports-safety-and-security-conference",
      "date": "04/24/2017",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Stephen_Flynn_HR-Headshot.png"
    }, {
      "title": "Share National Interscholastic Summit Addresses School Safety and Security Issues",
      "link": "http://news.usm.edu/article/national-interscholastic-summit-addresses-school-safety-and-security-issues",
      "date": "03/29/2017",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Moffett.jpg"
    }, {
      "title": "Share National Interscholastic Athletics Safety and Security Summit Set for March 28-30",
      "link": "http://news.usm.edu/article/national-interscholastic-athletics-safety-and-security-summit-set-march-28-30",
      "date": "02/02/2017",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/2017%20Interscholastic%20Banner.jpg"
    }, {
      "title": "Kinesiology Students and Professor Advocate for Health, Physical Education Funding",
      "link": "http://news.usm.edu/article/kinesiology-students-and-professor-advocate-health-physical-education-funding",
      "date": "04/10/2017",
      "img": null
    }, {
      "title": "First-ever Sports Safety and Security Radiological Response Exercise Conducted in Mississippi held at USM Jan. 18",
      "link": "http://news.usm.edu/article/first-ever-sports-safety-and-security-radiological-response-exercise-conducted-mississippi-h",
      "date": "01/19/2016",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Rad%20ex.jpg"
    }, {
      "title": "National Intercollegiate Athletics Safety and Security Summit Jan. 24-26",
      "link": "http://news.usm.edu/article/national-intercollegiate-athletics-safety-and-security-summit-jan-24-26",
      "date": "12/13/2016",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/LSU3001%20F.%20King%20Alexander%20%28003%29.jpeg"
    }, {
      "title": "National Marathon Safety and Security Summit set for Dec. 12-14",
      "link": "http://news.usm.edu/article/national-marathon-safety-and-security-summit-set-dec-12-14-0",
      "date": "11/21/2016",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/2016%20Marathon%20Banner_1.jpg"
    }, {
      "title": "NCS4 Achieves ANSI Accreditation",
      "link": "http://news.usm.edu/article/national-center-spectator-sports-safety-and-security-achieves-ansi-accreditation",
      "date": "11/17/2016",
      "img": "http://news.usm.edu/sites/default/files/imagecache/article_portrait/CSSP-mark_1.jpg"
    }, {
      "title": "Miller Receives Leadership Award at National Sports Safety and Security Conference",
      "link": "http://news.usm.edu/article/miller-receives-leadership-award-national-sports-safety-and-security-conference",
      "date": "07/14/2016",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Jeff%20Miller.jpg"
    }, {
      "title": "National Marathon Safety and Security Summit set for Dec. 12-14",
      "link": "http://news.usm.edu/article/national-marathon-safety-and-security-summit-set-dec-12-14",
      "date": "08/17/2016",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/2016%20Marathon%20Banner.jpg"
    }, {
      "title": "Industry Leaders Under 40 to Receive Recognition during Sports Security Conference",
      "link": "http://news.usm.edu/article/industry-leaders-under-40-receive-recognition-during-sports-security-conference",
      "date": "06/23/2016",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/NCS4%20AZ_1_2.jpg"
    }, {
      "title": "NCS4 Hosts Crowd Safety and Risk Analysis Workshop",
      "link": "http://news.usm.edu/article/ncs4-hosts-crowd-safety-and-risk-analysis-workshop",
      "date": "05/18/2016",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/ncs4%20workshop.jpg"
    }, {
      "title": "Facilities to Receive Recognition during National Sports Security Conference",
      "link": "http://news.usm.edu/article/facilities-receive-recognition-during-national-sports-security-conference-1",
      "date": "06/10/2016",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/NCS4%20AZ_1_0.jpg"
    }, {
      "title": "Professionals to Receive Recognition during National Sports Security Conference",
      "link": "http://news.usm.edu/article/professionals-receive-recognition-during-national-sports-security-conference-0",
      "date": "06/06/2016",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/NCS4%20AZ_1.jpg"
    }, {
      "title": "Achieving the Gold Standard at the National Sports Safety and Security Conference",
      "link": "http://news.usm.edu/article/achieving-gold-standard-national-sports-safety-and-security-conference",
      "date": "04/26/2016",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/NCS4%20AZ.jpg"
    }, {
      "title": "Professional Sport Facilities Safety and Security Summit set for March 8-10",
      "link": "http://news.usm.edu/article/national-forum-address-effect-paris-incident-sport-safety-and-security",
      "date": "05/10/2016",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/INTERPOL_1.JPG"
    }, {
      "title": "Industry Leaders to Participate in Professional Sport Facilities Safety and Security Summit",
      "link": "http://news.usm.edu/article/industry-leaders-participate-professional-sport-facilities-safety-and-security-summit",
      "date": "02/02/2016",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Home%20Slide%20Professional%202015%20%28002%29.jpg"
    }, {
      "title": "Sport Facilities Safety and Security Summit Attracts Industry Leaders",
      "link": "http://news.usm.edu/article/sport-facilities-safety-and-security-summit-attracts-industry-leaders",
      "date": "02/23/2016",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/MLS-1102%20edit%202%20%282%29.jpg"
    }, {
      "title": "National Intercollegiate Athletics Safety and Security Summit set for Jan. 26-28",
      "link": "http://news.usm.edu/article/national-intercollegiate-athletics-safety-and-security-summit-set-jan-26-28",
      "date": "01/01/2016",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Collegiate%20Generic%20Banner1%20%28002%29.jpg"
    }, {
      "title": "Carmel Becomes First High School in Nation to Attain Safety and Security Designation",
      "link": "http://news.usm.edu/article/carmel-becomes-first-high-school-nation-attain-safety-and-security-designation",
      "date": "10/12/2015",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Carmel%20high%20ncs4.jpeg"
    }, {
      "title": "Super Bowl LI: Security a presence and behind the scenes",
      "link": "https://www.newsday.com/sports/football/super-bowl/super-bowl-li-security-a-presence-and-behind-the-scenes-1.13062630",
      "date": "02/02/2017",
      "img": null
    }, {
      "title": "NCS4 Director Marciani receives security practitioner award",
      "link": "https://news.usm.edu/article/ncs4-director-marciani-receives-security-practitioner-award",
      "date": "11/22/2016",
      "img": null
    }, {
      "title": "NCS4 Signs Agreement with INTERPOL",
      "link": "http://news.usm.edu/article/center-spectator-sports-safety-and-security-signs-agreement-interpol",
      "date": "10/12/2016",
      "img": null
    }, {
      "title": "Wrestlemania receives team security effort for record crowd",
      "link": "http://www.athleticbusiness.com/stadium-arena-security/wrestlemania-receives-team-security-effort-for-record-crowd.html",
      "date": "07/07/2016",
      "img": null
    }, {
      "title": "A cohesive approach to vetting and training frontline workers",
      "link": "http://www.athleticbusiness.com/stadium-arena-security/a-cohesive-approach-to-vetting-and-training-frontline-workers.html",
      "date": "07/07/2016",
      "img": null
    }, {
      "title": "The birth of a high school gameday security plan",
      "link": "http://www.athleticbusiness.com/high-school-facilities/the-birth-of-a-high-school-gameday-security-plan.html",
      "date": "07/07/2016",
      "img": null
    }, {
      "title": "Bringing safety and security practices to a large urban school district",
      "link": "http://www.athleticbusiness.com/high-school-facilities/bringing-safety-and-security-practices-to-a-large-urban-school-district.html",
      "date": "07/07/2016",
      "img": null
    }, {
      "title": "Joe Louis Arena Becomes First Professional Sports Facility in Nation to Attain Safety and Security Designation",
      "link": "http://news.usm.edu/article/joe-louis-arena-becomes-first-professional-sports-facility-nation-attain-safety-and-security",
      "date": "06/30/2016",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/SESA%20Award2%20%28002%29.jpg"
    }, {
      "title": "National Interscholastic Activities and After-School Activities Safety and Security Summit Set for April 13-15",
      "link": "http://news.usm.edu/article/national-interscholastic-activities-and-after-school-activities-safety-and-security-summit-s",
      "date": "02/02/2016",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/High%20School%20Summit%20Banner%20eTouches.jpg"
    }, {
      "title": "Professional Sport Facilities Safety and Security Summit set for March 8-10",
      "link": "http://news.usm.edu/article/professional-sport-facilities-safety-and-security-summit-set-march-8-10",
      "date": "01/19/2016",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/PRO%20Generic%20Banner1%20%28002%29.jpg"
    }, {
      "title": "Industry Leaders to Participate in Professional Sport Facilities Safety and Security Summit",
      "link": "http://news.usm.edu/article/industry-leaders-participate-professional-sport-facilities-safety-and-security-summit",
      "date": "02/02/2016",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Home%20Slide%20Professional%202015%20%28002%29.jpg"
    }, {
      "title": "NCS4 Partners with INTERPOL on Risk Mitigation ",
      "link": "http://news.usm.edu/article/usm-national-center-spectator-sports-safety-and-security-partners-interpol-risk-mitigation",
      "date": "11/24/2015",
      "img": null
    }, {
      "title": "National Marathon Safety and Security Summit set for Dec. 8-10 (11.17.15 )",
      "link": "http://www.usm.edu/news/article/national-marathon-safety-and-security-summit-set-dec-8-10",
      "date": "11/17/2015",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Marathon%20Summit%20Banner.jpg"
    }, {
      "title": "SIA and NCS4 Team Up to Strengthen Security Practices at Stadium Events ",
      "link": "http://www.securityindustry.org/Pages/PressReleases/2015/SIA-and-NCS4-Team-Up-to-Strengthen-Security-Practices-at-Stadium-Events.aspx",
      "date": "09/28/2015",
      "img": null
    }, {
      "title": "NCS4 Awards Indiana University Safety and Security Designation ",
      "link": "http://www.usm.edu/news/article/ncs4-awards-indiana-university-safety-and-security-designation",
      "date": "09/09/2015",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/SESA_logo4c.jpg"
    }, {
      "title": "NCS4 Launches TOPVenue, a Software System for Venues and Events ",
      "link": "http://www.usm.edu/news/article/ncs4-launches-topvenue-software-system-venues-and-events",
      "date": "07/28/2015",
      "img": null
    }, {
      "title": "Industry Leaders Under 40 to Receive Recognition at National Sports Safety and Security Conference ",
      "link": "http://www.usm.edu/news/article/industry-leaders-under-40-receive-recognition-national-sports-safety-and-security-conference",
      "date": "06/29/2015",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/NCS42015logo%20%2800000002%29_1.jpg"
    }, {
      "title": "Facilities Earning Recognition at National Sports Safety and Security Conference ",
      "link": "https://www.usm.edu/news/article/facilities-earning-recognition-national-sports-safety-and-security-conference",
      "date": "06/15/2015",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/NCS42015logo%20%2800000002%29.jpg"
    }, {
      "title": "Professionals to be Recognized at Sports Safety and Security Conference ",
      "link": "http://www.usm.edu/news/article/professionals-be-recognized-sports-safety-and-security-conference",
      "date": "06/06/2015",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/NCS42015logo.jpg"
    }, {
      "title": "Turner to Receive Leadership Award at National Sports Safety and Security Conference ",
      "link": "http://www.usm.edu/news/article/turner-receive-leadership-award-national-sports-safety-and-security-conference",
      "date": "06/06/2015",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Paul%20Turner%20Headshot.jpeg"
    }, {
      "title": "Denton to Receive Leadership Award at National Sports Safety and Security Conference ",
      "link": "http://www.usm.edu/news/article/denton-receive-leadership-award-national-sports-safety-and-security-conference",
      "date": "06/06/2015",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Denton_1.jpeg"
    }, {
      "title": "First High School Risk Management Course Focuses on Athletic Events, After-School Activities ",
      "link": "http://www.usm.edu/news/article/first-high-school-risk-management-course-focuses-athletic-events-after-school-activities",
      "date": "05/18/2015",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/HSrisk.jpg"
    }, {
      "title": "NCS4 Announces Fundraising Campaign Supporting New MBA, Emphasis in Sport Security Management ",
      "link": "http://www.usm.edu/news/article/ncs4-announces-fundraising-campaign-supporting-new-mba-emphasis-sport-security-management",
      "date": "05/18/2015",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/NCS4%20campaign.JPG"
    }, {
      "title": "First Edition of Marathon Safety and Security Best Practices Guide ",
      "link": "http://www.endurancesportswire.com/first-edition-of-marathon-safety-security-best-practices-guide/",
      "date": "05/05/2015",
      "img": null
    }, {
      "title": "National Sports Safety and Security Conference & Exhibition ",
      "link": "http://www.athleticbusiness.com/ncs4-updates/national-sports-safety-and-security-conference-exhibition.html",
      "date": "04/04/2015",
      "img": null
    }, {
      "title": "Announcing the Latest NCS4 Conference Exhibitors and Sponsors ",
      "link": "http://www.athleticbusiness.com/high-school-facilities/announcing-the-latest-ncs4-conference-exhibitors-and-sponsors.html",
      "date": "05/05/2015",
      "img": null
    }, {
      "title": "Southern Miss College of Business, NSC4 Partner to Offer First MBA Sports Security Management Program ",
      "link": "http://www.usm.edu/news/article/southern-miss-college-business-nsc4-partner-offer-first-mba-sports-security-management-progr",
      "date": "04/04/2015",
      "img": null
    }, {
      "title": "National Summit to Address High School Safety and Security Issues ",
      "link": "http://www.usm.edu/news/article/national-summit-address-high-school-safety-and-security-issues",
      "date": "03/17/2015",
      "img": null
    }, {
      "title": "2015 National Safety and Security Conference to Incorporate Mock Trial ",
      "link": "http://www.usm.edu/news/article/2015-national-safety-and-security-conference-incorporate-mock-trial",
      "date": "03/03/2015",
      "img": null
    }, {
      "title": "Interscholastic Athletics and After-School Activities Risk Management Training Course Set for March 2015 ",
      "link": "http://www.usm.edu/news/article/interscholastic-athletics-and-after-school-activities-risk-management-training-course-set-ma",
      "date": "01/20/2015",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/NCS4%20Risk%20Management%20Instructors.jpg"
    }, {
      "title": "NCS4 hosts first training session for new security course ",
      "link": "http://www.wdam.com/story/27849007/usms-ncs4-hosts-first-training-session-for-new-security-course",
      "date": "01/14/2015",
      "img": null
    }, {
      "title": "Top marathon officials gather for summit on security ",
      "link": "http://www.foxsports.com/other/story/top-marathon-officials-meet-for-securty-summit-121714",
      "date": "12/17/2014",
      "img": null
    }, {
      "title": "National Interscholastic Athletics and After School Activities Safety and Security Summit set for March 21-23 ",
      "link": "http://www.usm.edu/news/article/national-interscholastic-athletics-and-after-school-activities-safety-and-security-summit-se",
      "date": "12/12/2014",
      "img": null
    }, {
      "title": "NCS4 to Partner with Athletic Business on Gameday Security ",
      "link": "http://www.usm.edu/news/article/ncs4-partner-athletic-business-gameday-security",
      "date": "12/12/2014",
      "img": null
    }, {
      "title": "Duguay First to Earn Certified Sport Security Professional Credential ",
      "link": "https://www.usm.edu/news/article/duguay-first-earn-certified-sport-security-professional-credential",
      "date": "10/28/2014",
      "img": null
    }, {
      "title": "NCS4 Announces 2015 Intercollegiate Athletics Safety and Security Summit ",
      "link": "http://www.usm.edu/news/article/ncs4-announces-2015-intercollegiate-athletics-safety-and-security-summit",
      "date": "10/10/2014",
      "img": null
    }, {
      "title": "How Technology Helps Mitigate Risk at Sporting Events ",
      "link": "http://www.securitymagazine.com/articles/85837-how-technology-helps-mitigate-risk-at-sporting-events?v=preview",
      "date": "10/10/2014",
      "img": null
    }, {
      "title": "NCS4 Presents at European Football Association in Warsaw, Poland ( 9.25.14)",
      "link": "http://www.usm.edu/news/article/ncs4-presents-european-football-association-warsaw-poland",
      "date": "09/25/2014",
      "img": null
    }, {
      "title": "National Marathon Safety and Security Summit set for Dec.16-18 ",
      "link": "http://www.usm.edu/news/article/national-marathon-safety-and-security-summit-set-dec-16-18",
      "date": "09/09/2014",
      "img": null
    }, {
      "title": "Nation's First Sport Security Professional Certification Awarded ",
      "link": "http://www.usm.edu/news/node/7110",
      "date": "07/21/2014",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/NCS4%20certification%20recipients.jpg"
    }, {
      "title": "Fenton Receives Award at National Security Conference ",
      "link": "https://www.usm.edu/news/article/fenton-receives-award-national-security-conference",
      "date": "07/10/2014",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/distinguished-leader0001%20%282%29.jpg"
    }, {
      "title": "Facilities to Receive Recognition during National Sports Security Conference ( 7.3.14)",
      "link": "http://www.usm.edu/news/article/facilities-receive-recognition-during-national-sports-security-conference-0",
      "date": "07/07/2014",
      "img": null
    }, {
      "title": "Professionals to Receive Recognition during National Sports Security Conference ",
      "link": "http://www.usm.edu/news/article/professionals-receive-recognition-during-national-sports-security-conference",
      "date": "07/07/2014",
      "img": null
    }, {
      "title": "Balancing Security and the Fan Experience in Sports Security ",
      "link": "https://old.ncs4.com/sites/default/files/attachments/balancing_security_and_the_fan_experience.pdf",
      "date": "07/07/2014",
      "img": null
    }, {
      "title": "Sport Safety and Security Conference Set for July 8-10 in Indianapolis ( 6.24.14)",
      "link": "http://www.usm.edu/news/article/sports-safety-and-security-conference-set-july-8-10-indianapolis",
      "date": "06/24/2014",
      "img": null
    }, {
      "title": "NCS4 Readies for 2014 Conference ",
      "link": "http://www.usm.edu/news/article/national-center-spectator-sports-safety-and-security-readies-2014-conference",
      "date": "05/21/2014",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/NCS42014logo_noicon.jpg"
    }, {
      "title": "Computer-Based Simulations Address High School Safety and Security Needs Nationwide ",
      "link": "http://www.usm.edu/news/article/computer-based-simulations-address-high-school-safety-and-security-needs-nationwide",
      "date": "05/05/2014",
      "img": null
    }, {
      "title": "Southern Miss Grants License to INCONTROL for Software Development ",
      "link": "http://www.usm.edu/news/article/southern-miss-grants-license-incontrol-software-development",
      "date": "04/30/2014",
      "img": null
    }, {
      "title": "Mississippi Leads Nation in Interscholastic Athletics Risk Management Training ",
      "link": "http://www.usm.edu/news/article/mississippi-leads-nation-interscholastic-athletics-risk-management-training",
      "date": "03/10/2014",
      "img": null
    }, {
      "title": "Security Company Takes Lead with NCS4's Sport Venue Staff Certification ",
      "link": "http://www.usm.edu/news/article/security-company-takes-lead-ncs4-s-sport-venue-staff-certification",
      "date": "02/28/2014",
      "img": null
    }, {
      "title": "Super Bowl security got help from NCS4 ",
      "link": "http://www.wdam.com/story/24609961/super-bowl-security-got-help-from-ncs4",
      "date": "01/28/2014",
      "img": null
    }, {
      "title": "National Intercollegiate Safety and Security Summit set for Jan. 28-30 ",
      "link": "https://www.usm.edu/news/article/national-intercollegiate-safety-and-security-summit-set-jan-28-30",
      "date": "01/23/2014",
      "img": null
    }, {
      "title": "Southern Miss Alumni Association Inducts Marciani into Hall of Fame ",
      "link": "http://www.usm.edu/news/article/southern-miss-alumni-association-will-induct-seven-hall-fame-0",
      "date": "10/21/2013",
      "img": null
    }, {
      "title": "NCS4 Announces 2014 Intercollegiate Athletics Safety & Security Summit ",
      "link": "http://www.usm.edu/news/article/ncs4-announces-2014-intercollegiate-athletics-safety-and-security-summit",
      "date": "10/11/2013",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/trent%20lott%20building%203.jpg"
    }, {
      "title": "Southern Miss Holds 9/11 Remembrance Service, Unveils Memorial Piece ",
      "link": "http://www.usm.edu/news/article/southern-miss-holds-911-remembrance-service-unveils-memorial-piece",
      "date": "03/11/2013",
      "img": null
    }, {
      "title": "Southern Miss NPHC Chapter and NCS4 to Honor 9/11 Victims, First Responders ",
      "link": "http://www.usm.edu/news/article/southern-miss-nphc-chapter-and-ncs4-honor-911-victims-first-responders",
      "date": "08/20/2013",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Trent%20Lott%20Memorial%203D%20Rendering.jpg"
    }, {
      "title": "National Center Offers New Certification Program for Sport Venue Staff ",
      "link": "http://www.usm.edu/news/article/national-center-offers-new-certification-program-sport-venue-staff",
      "date": "08/12/2013",
      "img": null
    }, {
      "title": "International Firm to Open U.S. Office at Southern Miss Trent Lott Center ",
      "link": "http://www.usm.edu/news/article/international-firm-open-us-office-southern-miss-trent-lott-center",
      "date": "07/22/2013",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/New%20company%20at%20TLC%20002.jpg"
    }, {
      "title": "NHL'S Cunningham Receives Award at National Security Conference ",
      "link": "http://www.usm.edu/news/article/nhl-s-cunningham-receives-award-national-security-conference",
      "date": "07/17/2013",
      "img": null
    }, {
      "title": "NCS4 2013 Conference and Exhibition Forum to Focus on Open Access Events ",
      "link": "http://www.usm.edu/news/article/ncs4-2013-conference-and-exhibition-forum-focus-open-access-events",
      "date": "05/13/2013",
      "img": null
    }, {
      "title": "Center seeks to improve, certify stadium security ",
      "link": "http://www.usatoday.com/story/sports/2013/05/02/security-stadiums-national-center-for-spectator-sports-safety-and-security/2130835/",
      "date": "05/05/2013",
      "img": null
    }, {
      "title": "LSU Presented Sports Event Secure Aware Certification from NCS4 ",
      "link": "http://www.lsu.edu/departments/gold/2013/04/lsupd.shtml",
      "date": "05/05/2013",
      "img": null
    }, {
      "title": "Vulnerable Points Along Marathon Route Highlight Security Challenges ",
      "link": "http://abcnews.go.com/US/marathon-security-practices-scrutinized-wake-boston-marathon-explosions/story?id=18969905#.UW2gSKVhjjB",
      "date": "04/16/2013",
      "img": null
    }, {
      "title": "NCS4 Hosts Sports Management Training Session for Chinese Group ",
      "link": "http://www.usm.edu/news/article/ncs4-hosts-sports-management-training-session-chinese-group",
      "date": "04/04/2013",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Chinese%20delegation.jpg"
    }, {
      "title": "NCS4 Readies for 2013 Conference ",
      "link": "http://www.usm.edu/news/article/national-center-spectator-sports-readies-2013-conference",
      "date": "03/03/2013",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Duhigg%20credit%20Liz%20Alter.jpg"
    }, {
      "title": "NCS4 Kicks Off Membership Campaign With \u00e2\u20ac\u02dcGate Security' Webinar ",
      "link": "http://www.usm.edu/news/article/ncs4-kicks-membership-campaign-%E2%80%98gate-security%E2%80%99-webinar",
      "date": "03/03/2013",
      "img": null
    }, {
      "title": "NCS4 Director Marciani Participates in White House Discussion on Gun Violence ",
      "link": "http://www.usm.edu/news/article/ncs4-director-marciani-participates-white-house-discussion-gun-violence",
      "date": "02/28/2013",
      "img": null
    }, {
      "title": "NCS4 Hosts Board Summit for Professional and College Sports Leagues ",
      "link": "http://www.usm.edu/news/article/ncs4-hosts-board-summit-professional-and-college-sports-leagues",
      "date": "12/12/2012",
      "img": "http://news.usm.edu/sites/default/files/imagecache/article_portrait/Magic.jpg"
    }, {
      "title": "NCS4, SDM Magazine Announce Award for Innovation in Venue Security Design ",
      "link": "http://www.usm.edu/news/article/ncs4-sdm-magazine-announce-award-innovation-venue-security-design",
      "date": "11/30/2012",
      "img": "http://news.usm.edu/sites/default/files/imagecache/400xY/Golden%20Eagle%20final.jpg"
    }, {
      "title": "High School officials meet to discuss sporting events security ",
      "link": "http://www.wdam.com/story/19985757/high-school-officials-meet-to-discuss-sporting-events-security",
      "date": "11/30/2012",
      "img": null
    }, {
      "title": "Southern Miss Remains at Forefront of Collaborative Research Efforts ",
      "link": "http://www.usm.edu/news/blog/southern-miss-remains-forefront-collaborative-research-efforts",
      "date": "10/23/2012",
      "img": null
    }, {
      "title": "Sports Safety Officials train for large venue evacuations at USM ",
      "link": "http://www.wlox.com/story/19638251/officials-train-for-large-venue-evacuations-at-usm",
      "date": "10/23/2012",
      "img": null
    }, {
      "title": "NCS4 Holds Pilot Workshop on Safety and Security at High School Events ",
      "link": "http://www.usm.edu/news/article/ncs4-holds-pilot-workshop-safety-and-security-high-school-events",
      "date": "09/18/2012",
      "img": null
    }, {
      "title": "Experts Weigh in on Fan Violence at NCS4 Conference's National Forum ",
      "link": "https://www.usm.edu/news/article/experts-weigh-fan-violence-ncs4-conference%E2%80%99s-national-forum",
      "date": "08/08/2012",
      "img": null
    }, {
      "title": "NCS4 Honors Major League Baseball Executive Dan Mullin ",
      "link": "https://www.usm.edu/news/article/ncs4-honors-major-league-baseball-executive-dan-mullin",
      "date": "08/08/2012",
      "img": null
    }, {
      "title": "NCS4 Conference Forum, Breakout Sessions to Feature Security Experts ",
      "link": "https://www.usm.edu/news/article/ncs4-conference-forum-breakout-sessions-feature-security-experts",
      "date": "07/26/2012",
      "img": null
    }, {
      "title": "The emerging field of sport safety and security management ",
      "link": "http://www.gsnmagazine.com/node/26789?c=security_services",
      "date": "07/18/2012",
      "img": null
    }, {
      "title": "NCS4, eVerifile Partner on College Facility, Entertainment Venue Security ( 6.12.12)",
      "link": "http://www.usm.edu/news/article/ncs4-everifile-partner-college-facility-entertainment-venue-security",
      "date": "06/12/2012",
      "img": null
    }, {
      "title": "NCS4 Produces Textbook on Sport Safety and Security ",
      "link": "http://www.usm.edu/news/article/ncs4-produces-textbook-sport-safety-and-security",
      "date": "06/12/2012",
      "img": null
    }, {
      "title": "NCS4 to Facilitate Weather Planning Workshop ",
      "link": "http://www.usm.edu/news/article/ncs4-facilitate-weather-planning-workshop-0",
      "date": "03/03/2012",
      "img": null
    }, {
      "title": "NCS4 Announces Media Sponsors for Annual Conference ( 2.23.12)",
      "link": "https://www.usm.edu/news/article/ncs4-announces-media-sponsors-annual-conference",
      "date": "02/23/2012",
      "img": null
    }, {
      "title": "NCS4 to Hold Training Exercise ",
      "link": "http://www.usm.edu/news/article/national-center-sports-security-and-safety-hold-training-exercise",
      "date": "01/26/2012",
      "img": null
    }, {
      "title": "NCS4 Readies for 2012 Conference ",
      "link": "http://www.usm.edu/news/article/national-center-spectator-sports-readies-2012-conference",
      "date": "01/17/2012",
      "img": null
    }, {
      "title": "China Sport Venue Association, Southern Miss' NCS4 Establish Relationship ",
      "link": "http://www.usm.edu/news/article/china-sport-venue-association-southern-miss%E2%80%99-ncs4-establish-relationship",
      "date": "01/01/2012",
      "img": null
    }, {
      "title": "Institute for Study of Sport Incidents Established at NCS4 ",
      "link": "http://www.usm.edu/news/articl/institute-study-sport-incidents-established-ncs4",
      "date": "10/28/2011",
      "img": null
    }, {
      "title": "Sport Venue Evaluation to Assess Game Day Traffic, Parking at Southern Miss ",
      "link": "http://www.usm.edu/news/article/sport-venue-evaluation-assess-game-day-traffic-parking-southern-miss",
      "date": "10/20/2011",
      "img": null
    }, {
      "title": "Metal Artifacts from Twin Towers Making Their Way to Hattiesburg ",
      "link": "https://www.usm.edu/news/article/metal-artifacts-twin-towers-making-their-way-hattiesburg",
      "date": "08/29/2011",
      "img": null
    }, {
      "title": "Artifacts from Twin Towers to be Displayed in Downtown Hattiesburg ",
      "link": "http://www.usm.edu/news/article/artifacts-twin-towers-be-displayed-downtown-hattiesburg",
      "date": "08/18/2011",
      "img": null
    }, {
      "title": "NCS4 Visiting Scholar Played Role in South Korea Winter Olympics Bid",
      "link": "http://news.usm.edu/article/ncs4-visiting-scholar-played-role-south-korea-winter-olympic-bid-0",
      "date": "07/07/2011",
      "img": null
    }];


    $scope.dateConvert = (str)=>{
      return new Date(str);
    }


    $scope.cust_comparator = function(v1, v2) {
        let date1 = $scope.dateConvert(v1.value);
        let date2 = $scope.dateConvert(v2.value);
        if(date1 > date2) {
          return -1;
        }
        return 1;
    };
});
