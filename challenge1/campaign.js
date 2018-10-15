// Your job is to define the different objects and arrays, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.

// Object 1: Information about Elizabeth
let candidate = {
  name: "Elizabeth Sanger",
  congressional_district: "7th Congressional District in Tennessee" ,
  platform_statements: {
    taxes: "I believe in lowering taxes for all classes and using the savings to encourage economic stimulus through increased incentives." ,
    jobs: "With one of the lowest unemployement rates in the country, Tennessee has shown how specific industries, such as healthcare and music, can positivly impact job availability. Moving forward, we will focus on making jobs available for all levels of employement, including blue collar workers.",
    Infrastructure: "Our area does not have the infrasturcture to keep up with the rapid growth and expansion we've been experiencing over the past 5 years. Major investments into roads and public transportation will be essential to ensuring the growth is sustainable.",
    health_care: "The health care system. It is time we fix it. I have no idea how we will do that, but I will continue to work with colleagues across all parties and philisophies to determine the next right step.",
    crime_and_enforcement: "Along with growth, our city has seen an increase in crime and will need more officers to keep all members of our city safe.",
  },
  biography: "I grew up in Brentwood, Tennessee and attended Brentwood Academy. I went on to recieve my bachelors degree from the University of Tennessee and my masters in nonprofit management from Vanderbilt University. I'm running for office because I believe I can make our city even more prosperous than it has ever been.",
  mission_statement: "I believe in a better Tennessee and I will work tirelessly, without limitations to ensure a prosperous future for our state." ,
  Image_gallery: {
    head_shot: "www.someimagelink.com",
    picture_of_family: "www.someimagelink.com/family",
    picture_of_constituents: "www.someimagelink.com/constituents",
  },
}

// Object 2: Campaign specific details

let campaign = {
  donation_url: "www.donatehere.com" ,
  vote_url: "www.registertovote.com",
  events: [
    {
      name: "event #1",
      location: "Nashville, TN",
      date: 10/14/18,
      start_time: "6pm",
      end_time: "8pm",
    },
    {
      name: "event #2",
      location: "somewhere else",
      date: 10/15/18,
      start_time: "12pm",
      end_time: "1pm",
    },
    {
      name: "event #3",
      location: "Franklin, TN",
      date: 10/15/18,
      start_time: "3pm",
      end_time: "4pm",
    }
  ]
}

// Object 3: Volunteer information
  let volunteer = [
    {
      name: "Sally Jones" ,
      address: "1112 Oak Drive, Franklin, TN 37067" ,
      email: "sally@gmail.com",
      phone_number: "615-111-1234",
      availability: [10/12/18, 10/13/18, 10/15/18, 10/20/18],
      activities: {
        answering_phone_calls: true,
        taking_polls: false,
        fundraising: false,
        event_management: true,
        other: true,
      },
    },
    {
      name: "Johnny Fields",
      address: "2376 Fieldstone Court, Spring Hill, TN 37089" ,
      email: "Johnny@fields.com",
      phone_number: "615-227-1985",
      availability: [10/17/18, 10/18/18, 10/24/18, 10/27/18],
      activities: {
        answering_phone_calls: false,
        taking_polls: false,
        fundraising: true,
        event_management: false,
        other: false,
      },
    },
    {
      name: "Luke Berry",
      address: "3429 Bubblegum Lane, Nolensville, TN 37062",
      email: "Berry@bubblegumlane.com" ,
      phone_number: "615-939-1063" ,
      availability: [10/21/18, 10/26/18, 10/30/18, 10/31/18],
      activities: {
        answering_phone_calls: false,
        taking_polls: true,
        fundraising: false,
        event_management: true,
        other: false,
      },
    },
  ]

  // After you have defined all the objects for representing the data about Elizabeth's campaign, write a corresponding function for each one whose purpose is to change the state of the object. Then use your functions to modify the existing data.

  //  editName
      candidate.firstName = candidate.name.split(' ')[0];
      candidate.lastName = candidate.name.split(' ')[1];
      console.log (candidate.name, candidate.firstName, candidate.lastName);
      
  // change platform statements
      let democrat = [ {taxes: "distribute wealth"}, {jobs: "Jobs are good"},{Infrastructure: "extra structure"}, {health_care: "universial healthcare"}, {crime_and_enforcement: "no police"}]
      
      let republican = [ {taxes: "tax breaks for the wealthy"}, {jobs: "Jobs for the educated"}, {Infrastructure: "Build all of the things"}, {health_care: "employer sponsored healthcare"}, {crime_and_enforcement: "Police everywhere"}]


  function changeStance (party){
    // iterate over correct party array
    for (let i = 0; i < party.length; i++) {
      changePlatform(Object.keys(party[i])[0], Object.values(party[i])[0]);
    }
  }

  function changePlatform (topic, stance){
    candidate.platform_statements[topic.toString()] = stance;
    console.log(candidate.platform_statements);
  }

  changeStance(democrat);
  changeStance(republican);


  // function addImage (image link){}

  // function addEvent (event details){}
  let eventName = campaign.events.name
  let eventLocation = campaign.events.location
  let eventDate = campaign.events.date
  let eventStart = campaign.events.start_time
  let eventEnd = campaign.events.end_time

  campaign.events.push({eventName: name, eventLocation: location})

  // function changeEvent (event details) {}

  // function changeVolunteer (volunteer information){}

  // function addVolunteer (volunteer information) {}
