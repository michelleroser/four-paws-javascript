# Four Paws

Four Paws is a site advertising the dog care services of a small business in Surrey, England. This site will be targeted towards dog owners who are seeking professional dog walking, sitting and day care services in their local area. The site will clearly show the available services, opening times and an image gallery showing the facilities and type of dogs the business currently care for.  


## User Experience (UX)

### User stories

* First Time Visitor Goals
  * As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about what services are available.
  * As a First Time Visitor, I want to be able to easily navigate throughout the site to find content.
  * As a First Time Visitor, I want to look for opening times so I know if the service will be able to meet my schedule.

* Returning Visitor Goals
  * As a Returning Visitor, I want to find information about opening times.
  * As a Returning Visitor, I want to find the best way to get in contact with the organisation with any questions I may have.
  * As a Returning Visitor, I want to find community links.

* Frequent User Goals
  * As a Frequent User, I want to check to see if there are any newly added photos.
  * As a Frequent User, I want to check to see if there are any new services.
  * As a Frequent User, I want to check if there are changed to the opening times during holidays etc.

### Design

* Colour Scheme
  * The two main colours used are light dusty pink and medium grey. With accents of dark dusty pink.

* Typography
  * The Baloo 2 font is the main font used throughout the whole website with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly. Baloo 2 is a fun font that is clear and easy to read.

* Imagery
  * Imagery is important. The large, hero image is designed to be bold and catch the user's attention. It also has an energetic and fun feeling.
  * The images in the gallery are fun, in-sync with each other and informative.

### Wireframes

[Homepage Desktop](assets/readme-images/homepage-desktop.png)

[Homepage Tablet](assets/readme-images/homepage-tablet.png)

[Homepage Mobile](assets/readme-images/homepage-mobile.png)

[Gallery Desktop](assets/readme-images/gallery-desktop.png)

[Gallery Tablet](assets/readme-images/gallery-tablet.png)

[Gallery Mobile](assets/readme-images/gallery-mobile.png)

[Contact Desktop](assets/readme-images/contact-desktop.png)

[Contact Tablet](assets/readme-images/contact-tablet.png)

[Contact Mobile](assets/readme-images/contact-mobile.png)


## Features

### Existing Features

* Navigation Bar
  * Featured on all three pages, the fully responsive navigation bar includes links to the Logo, Home page, Gallery and Contact page and is identical in each page to allow for easy navigation and satisfying UX.
  * This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ???back??? button.

![Image of navigation bar](assets/screenshots/navbar.png)


* The landing page image
  * The landing includes a bright and welcoming image of a dog playing with a ball in the local woods.
  * This section introduces the user to Four Paws Daycare with an interesting animation to grab their attention

![Image of landing page](assets/screenshots/heroimage.png)

* Services Section
  * The services section will show the user the exact services Four Paws Daycare provides.
  * This will allow the user to quickly see the content they are seeking upon visiting the site, so they know whether it is worth enquiring further.

![Image of services section](assets/screenshots/services.png)

* Opening Times Section
  * This section will clearly display the different opening times for each day of the week in an easy to read layout.
  * This will allow the user to quickly ascertain whether the service times available match up with their expectations, along with knowing when the business is open and available to take enquiries.

![Image of opening times](assets/screenshots/openingtimes.png)

* The Footer
  * The footer section includes links to the relevant social media sites for Four Paws Daycare. The links will open to a new tab to allow easy navigation for the user.
  * The footer is valuable to the user as it encourages them to keep connected via social media and allows the user to view further photographs and reviews on these platforms.

![Image of the footer](assets/screenshots/footer.png)

* Gallery
  * The gallery will provide the user with supporting images to see how happy the dogs are under Four Paws Daycare's care.
  * This section is valuable to the user as they will be able to see how much space is available for their dog along with the multiple types of dogs that the business have experience with to help reassure them further.

![Image of gallery page](assets/screenshots/gallerypage.png)

* The Contact Page
  * This page will allow the user to see the address, telephone number and email address for the business.
  * It will include a google maps link so that the user can clearly identify the distance needed to travel to use their daycare services.
  * It will also include an enquiry form so that the user can submit a further enquiry if they would like to know more information.
  * The Enquiry form will function using additional javascript elements:
    * Focus on the input areas so the customers get feedback on their clicks.
    * Using EmailJS to make the contact form fully functional with emails send to the owners personal account.
    * Show an alert on submission of the form to give the customer a visual confirmation.
  * The map will include additional javascript functionality:
    * Cluster Markers to show the locations dogs are taken on walks.
    * Labels and custom icons pin pointing these markers.
    * The map shows automatically in terrain view to help the viewer understand the location better.
  * A weather widget will give the customer an idea of the conditions forecast for the next 7 days. This may help influence their decision making for bookings.

![Image of contact page](assets/screenshots/contactpage.png)

### Features Left to Implement

* About Us page
  * A further feature to add would be a page with images of each individual team member, with a brief description of themselves and why they love caring for dogs.
  * This page would also include an insert from the owners explaining more about why they decided to start Four Paws Daycare.

* Price List
  * Another valuable feature to add would be a price list for the services, so that the user can identify immediately whether the service price meet their expectations and budget.

* Map Functionality
 * I was unable to enable the ability to click on the markers and have them zoom to the exact location. This feature could then include an info window that explains more about that area.

## Technologies Used

### Languages Used

* HTML5
* CSS3
* jQuery

## Frameworks, Libraries & Programs Used

* Bootstrap 5:
  * Bootstrap was used to assist with the responsiveness and styling of the website.
* Google Fonts:
  * Google fonts were used to import the "Baloo 2" font via link on the index.html page.
* Font Awesome:
  * Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
* jQuery:
  * jQuery came with Bootstrap to make the navbar responsive.
  * I wrote custom jQuery to make my form more responsive to the user.
* Git
  * Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
* GitHub:
  * GitHub is used to store the projects code after being pushed from Git.
* Balsamiq:
  * Balsamiq was used to create the wireframes during the design process.
* Google API
 * I integrated googles map api to make my map more interactive.
* EmailJS API
 * I integrated the EmailJS api to ensure my enquiry form is functional.

## Validator Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

* W3C Markup Validator - [Results](assets/screenshots/html-test.png)
* W3C CSS Validator - [Results](assets/screenshots/css-test.png)


## Testing User Stories from User Experience (UX) Section

* First Time Visitor Goals
  * As a First Time Visitor, I want to easily understand the main purpose of the site and learn more about the organisation.
    * Upon entering the site, users are automatically greeted with a clean and easily readable navigation bar to go to the page of their choice. Underneath there is a Hero Image with a large services heading which shows the purpose of the site.
    * The main points are made immediately with the services section.
    * The user has two options, click the contact us page and make direct contact, or make and enquiry using the form.

  * As a First Time Visitor, I want to be able to easily be able to navigate throughout the site to find content.
    * The site has been designed to be fluid and never to entrap the user. At the top of each page there is a clean navigation bar, each link describes what the page they will end up at clearly.
    * On the Contact Us Page, after a form response is submitted, the page refreshes and the user is brought to the top of the page where the navigation bar is.

  * As a First Time Visitor, I want to look for opening times so I know if the service will be able to meet my schedule.
    * Once the new visitor has scrolled past the image they will immediately be provided with the opening times section.


* Returning Visitor Goals
  * As a Returning Visitor, I want to find information about opening times.
    * These are clearly shown on the homepage.

  * As a Returning Visitor, I want to find the best way to get in contact with the organisation with any questions I may have.
    * The navigation bar clearly highlights the "Contact Us" Page.
    * Here they can fill out the form on the page to be contacted, or they can use the Daycare contact details.
    * The footer contains links to the organisations Facebook, Twitter and Instagram page.
    * Whichever link they click, it will be open up in a new tab to ensure the user can easily get back to the website.

  * As a Returning Visitor, I want to find community links.
    * The Facebook Page can be found at the footer of every page and will open a new tab for the user and more information can be found on the Facebook page.


* Frequent User Goals
  * As a Frequent User, I want to check to see if there are any newly added photos.
    * The user would already be comfortable with the website layout and can easily access the photos pages.
    * As a Frequent User, I want to check to see if there are any new services.
            The user would already be comfortable with the website layout and can easily see if any new services have been added.
    * As a Frequent User, I want to check if there are changed to the opening times during holidays etc.
            The homepage provided the opening times so the user would quickly be able to check if there have been any changes.



## Further Testing

* The Website was tested on Google Chrome, Internet Explorer, Firefox and Safari browsers.
* The website was viewed on a variety of devices such as Desktop, Laptop, iPhone 11 & iPhone 11pro.
* A large amount of testing was done to ensure that all pages were linking correctly.

## Known Bugs

  * When sized down to a mobile view, the bootstrap gallery sections into 2 photos per column which give an appearance of uneven white spacing between the photos.

## Deployment

### The project was deployed to GitHub Pages using the following steps...

    1.Log in to GitHub and locate the GitHub Repository
    2.At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    3.Scroll down the Settings page until you locate the "GitHub Pages" Section.
    4.Under "Source", click the dropdown called "None" and select "Master Branch".
    5.The page will automatically refresh.
    6.Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

    1.Log in to GitHub and locate the GitHub Repository
    2.At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
    3.You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

    1.Log in to GitHub and locate the GitHub Repository
    2.Under the repository name, click "Clone or download".
    3.To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
    4.Open Git Bash
    5.Change the current working directory to the location where you want the cloned directory to be made.
    6.Type git clone, and then paste the URL you copied in Step 3.
    7.Press Enter. Your local clone will be created.


## Credits

### Code

* The Hero Image animation came from Code Institute, Love Running Project.

* Bootstrap5: Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.

* The integration of Email JS was supported with Code Institute Guides.


### Content

* All content was written by the developer.


### Media

* All Images were sourced from https://www.pexels.com/
  * "Dog-1" - Snapwire
  * "Dog-2" - Valeria Boltneva
  * "Dog-3" - Jayden Burdick
  * "Dog-4" - Adam Kontor
  * "Dog-5" - Vlad Che??an
  * "Dog-6" - Dariusz Grosa
  * "dog-iphone" - Mithul Varshan
  * "dog-with-ball" - Chept?? Cormani

* SVG Icon for Map sourced from http://svgrepo.com
