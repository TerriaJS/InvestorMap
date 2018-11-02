<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">
    <title>Investor Map - Help & FAQ - Frequently Asked Questions</title>
    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="../../assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">
    <!-- Custom styles for this template -->
    <link href="css/custom.css" rel="stylesheet">
    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="../../assets/js/ie-emulation-modes-warning.js"></script>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="http://nationalmap.gov.au/investormap/">
            <img alt="Brand" src="../images/investor-banner.svg"/>
          </a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a href="../about.html">About the Investor Map</a></li>
            <li class="active"><a href="help.html">Help & FAQ</a></li>
            <li><a href="privacy.html">Privacy</a></li>
            <li><a href="http://nationalmap.gov.au/investormap/" target="_blank">Launch the Investor Map</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <!-- Begin page content -->
    <div class="container content">
    <div class="row">
      <nav class="side-nav navbar-right col-md-3 col-md-offset-1">
      <div data-spy="affix">
        <h4 class="nav-header">How to...</h4>
        <ul class="how-to">
          <li><a href="help.html">Get started with Investor Map</a></li>
          <li><a href="help.html#feature-info">Find out about a displayed feature</a></li>
          <li><a href="help.html#add-data">Display my own spatial data</a></li>
          <li><a href="help.html#download">Download data from Investor Map</a></li>
          <li><a href="help.html#share">Share my Investor Map view with others and/or print</a></li>
          <li><a href="help.html#splitter">Work with the Satellite Imagery and the splitter functionality</a></li>
          <li><a href="help.html#charts">Work with charts</a></li>
        </ul>
        <h4 class="nav-header">Key Features</h4>
        <ul class="key-features">
          <li><a href="map-navigation.html">Map Navigation and Display</a></li>
          <li><a href="data-catalogue.html">Data Catalogue</a></li>
          <li><a href="data-workbench.html">Data Workbench</a></li>
        </ul>
        <h4 class="nav-header">Frequently Asked Questions</h4>
        <ul class="faq">
          <li><a href="faq.html">Investor Map Operation</a></li>
          <li><a href="faq.html#nm-systemdata">Investor Map system and data</a></li>
          <li><a href="faq.html#nm-reportingissues">Reporting issues</a></li>
        </ul>
        </div>
      </nav>
    <div class="col-md-8">

# Frequently Asked Questions

<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

## <a name="nm-operation" class="anchor">Investor Map Operation</a>

#### Where is the Investor Map User Manual?

There isn't one! All user interface features of the Investor Map are either obvious from the interface or are described in this Help.

Investor Map has been carefully designed to be as easy to use as possible. Our user experience design team run regular usability testing sessions, the results of which are then assessed for inclusion in releases.

#### What browsers work with the Investor Map?

It is best to use a browser with WebGL support such as the latest versions of Google Chrome, Mozilla Firefox and Internet Explorer 11. It will also work in some older browsers (for example IE9 and IE10) but the map rendering will be limited. It may not support 3D rendering of maps, so the **3D Terrain** option may show the same result as **3D Smooth**.

#### What types are spatial data are displayed by the Investor Map?

There are three types of spatial data which are read from the data sources and displayed by the Investor Map over its base maps:

- **Point** Click on any point to see more information about that particular point feature.
- **Line** Click on any line to see more information about that particular line feature.
- **Region** Click within any region to see more information about that region.

#### Why do “3D Terrain” and “3D Smooth” Perspective Views look the same on my computer?

Some older computers do not have graphics cards which fully support WebGL and some older browsers do not make use of this support even if it is present. The Investor Map requires this support in order to support 3D Terrain Perspective View.

Try upgrading your browser to the latest version. If that still does not work, you may need to consider working on a computer that has more recent graphics support.

#### Why does the terrain in my perspective view have two different hues?

Investor Map automatically changes the content of the map according to the scale at which you're viewing. If you zoom in it shows more detail. At some points in the zoom range, the map display switches from high altitude photography to lower altitude photography. These sets of the photography are not colour matched to each other, so may have quite different hues. The actual photography scales used, the date of that photography and its lighting conditions will vary across Australia.

When you are using Perspective View the part of the terrain nearest to the "camera position" is naturally shown at a larger scale than the more distant parts. Depending on your zoom level, this can result in the foreground being displayed with a different set of photography from the distant parts of your Perspective View.

#### I need more help to use the Investor Map. Who can I ask?

Send your question to the Investor Map support email address, which is northernaustralia@austrade.gov.au or use the Feedback functionality at the bottom right corner of the map.

## <a name="nm-systemdata" class="anchor">Investor Map system and data</a>

#### Where does the spatial data come from?

In most cases the spatial data being displayed is coming straight from the various data custodians included in the platform. For some datasets which are not available in a format possible to display on the map, these have been transformed and are hosted by the Investor Map with the data custodians’ permission. You can see details of the department or agency that provides the spatial data by clicking **About this data** in the Data Workbench.

#### The data I was using are now gone. Where did they go?

The spatial data displayed by the Investor Map are referenced directly from the supplying department or agency by the Investor Map server. If that supplying department or agency updates or removes any data, that change will be reflected immediately by the Investor Map. If you have any questions about the spatial data you can **Contact Austrade** or contact the supplying department or agency.

#### What can I do if I encounter errors when I try to add data to my workbench?

With Investor Map application harvesting data from various custodians in real time, it is highly dependent on the reliability of those services. There are many types of errors which can be encountered when data is selected:

- Dataset hangs and possibly freezes the screen - that is because the application in your browser is trying to show an unusually large file.
- 404, 500, 501, 503 etc. and other common errors which mean data services are not available due to server hosting those datasets temporarily having issues.
- Dataset doesn’t hang, no error message is displayed, but it doesn’t show on the map.

What you can do:

- Come back to the dataset later (it might have been a temporary outage of the custodian server).
- Refresh the view and clear the browser cache (i.e. “browsing data”).
- When there is no visible error, try first “zoom to extent” functionality or just zoom in very closely into an area of interest and wait for the app to “load” the images. Monitor the “loading” through the “orange load progress bar” at the very top of the map.

#### Where do the base maps come from?

The base maps displayed by the Investor Map come from a number of difference sources including Microsoft’s Bing, Geoscience Australia and NASA. They are downloaded from the source as they are required, so they are as up to date as that service provides.

#### Why are location/address labels incorrectly positioned?

Locations/addresses are part of the base maps provided by Bing Maps, Geoscience Australia, NASA and OpenStreet Maps. The Investor Map is dependent on those providers updates. For example, Bing Maps updated the Australian maps in February 2017: https://blogs.bing.com/maps/February-2017/New-Imagery-Released-Covering-Australia-and-India. For correcting those location errors, users have to address them directly to the base maps providers.

#### Who developed the Investor Map?

The Investor Map was developed by [Data61](https://data61.csiro.au) and funded by the Australian Trade and Investment Commission (Austrade), working closely with Geoscience Australia. See the [About](../about.html) page from more information.

#### Who owns the spatial data on Investor Map? Can I use it and distribute it?

Before distributing any data from the Investor Map it is important to understand the licence restriction for the data. All Data Sets displayed by the Investor Map are the property of the department or agency which has provided them. Therefore the restrictions for each Data Set may be quite different.

The licence which governs the usage and distribution restrictions for each Data Set is shown in the About this data for the Data Set. To Display this information click on the title of your prefered data set in the Data Catalogue.

#### How reliable is the spatial data on the Investor Map?

The reliability will vary between data sets. To understand the reliability of a particular data set, click on the title of the data set in question in the Data Catalogue for more information. The metadata which is shown in the Data Catalogue may offer sufficient information or you may need to contact the listed data provider.

#### Why can I see the whole world on the Investor Map?

Most of the Investor Map base maps are provided by services for the whole world. There is no value in suppressing the display of the rest of the world, so you can view it if you wish. (Take a look at Mt Everest or the Grand Canyon in perspective view - they’re cool!)

Obviously, the Investor Map’s spatial data does not cover the rest of the world!

#### Will more data sets be added to the Investor Map?

That depends on the supplying departments or agencies, who must make the data available. You will need to contact individual data providers to understand their data release schedules.

## <a name="nm-reportingissues" class="anchor">Reporting issues</a>

#### I think I’ve found a bug. How do I report it?

Email us on northernaustralia@austrade.gov.au to report the problem. Be sure to include a step by step description of how to reproduce the problem.

#### I’d love a new feature or new dataset. Can I suggest it?

Absolutely! Just email your suggestion to northernaustralia@austrade.gov.au or use the Feedback functionality at the bottom right corner of the map.

#### I think there’s an error in some data. How can I find out if it’s correct or report the problem?

The data displayed by the Investor Map are only referred to by the Investor Map and are not part of the Investor Map. You will need to refer to the department or agency which provides the Data Set which contains the issue.

Click on the title of your prefered data set in the Data Catalogue to find out which department or agency provides that data.

</div>  <!-- end panel-group -->
    </div> <!-- col-sm-9 -->
  </div> <!-- End row -->
  </div><!-- End container -->
    <footer class="footer">
      <div class="container">
        <p class="text-muted">&copy; Australian Trade and Investment Commission and CSIRO Data61. All Rights Reserved.</p>
        <p><strong><a href="../about.html#terms">Terms and conditions</a></strong> – <strong><a href="privacy.html">Privacy</a></strong></p>
      </div>
    </footer>
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
    <script src="js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>
  </body>
</html>
