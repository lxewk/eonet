<template>
  <div class="curation">
    <div class="introduction">
      <button id="btn-curation">Event curation at EONET</button>
      <div class="sea-lake">
        <h5>Sea and Lake Ice</h5>
        <p><i>Icebergs</i><br>
          All icebergs currently tracked by the National Ice Center are included in EONET. Full criteria for which icebergs are included in the National Ice Center can be found on NOAA’s National Ice Center web site. To be classified as an iceberg by the National Ice Center the total area of the iceberg must be at least 500 square meters.
        </p>
        <p>
          The National Ice Center updates their online list every Friday and EONET ingests this file on Saturday morning. If an iceberg’s location is not recorded by the National Ice Center for three weeks (meaning it has been delisted by NATICE) it will be deactivated in EONET.
        </p>
        <p>
          EONET does not ingest every reported position for any given iceberg. An iceberg location is only recorded in EONET if it is either<br> a) a newly-tracked iceberg, or<br> b) has moved at least 50km since its last observed position.
        </p>
        <br>
        <p><i>Historical Data</i><br>
          We have ingested some historical iceberg data back to August 2011 and intend to eventually include the entire back catalog from the Brigham Young University <a href="http://www.scp.byu.edu/data/iceberg/database1.html">Antarctic Iceberg Tracking Database</a>.
        </p>
        <hr>
      </div>
      <div class="severe-storm">
        <h5>Severe Storms</h5>
        <p><i>Tropical Cyclones</i><br>
          Tropical cyclones are added to EONET when they first achieve tropical storm designation—wind speeds of at least 34 knots (39 mph or 17.5 m/s).
        </p>
        <p>
          Cyclonic events are closed after 5 days of inactivity (i.e., since the last reported location from our sources).
        </p>
        <br>
        <p><i>Sources</i><br></p>
        <a href="https://www.nhc.noaa.gov/" class="link-curation">National Hurricane Center</a><br>
        <a href="http://www.metoc.navy.mil/jtwc/jtwc.html" class="link-curation">Joint Typhoon Warning Center</a>
        <br><br>
        <p><i>Historical Data</i><br>
          Although not complete, a significant catalog of tropical cyclones since 2000 is included in EONET. This historical catalog will be augmented in the near future (2019) using the <a href="https://www.ncdc.noaa.gov/ibtracs/V">IBTrACS database</a>.
        </p>
        <br>
        <p><i>Other Severe Weather</i><br>
          Other severe storms and weather that are reported by various meteorological societies and popular media are occasionally included in EONET.
        </p>
        <hr>
      </div>
      <div class="volcanoes">
        <h5>Volcanoes</h5> 
        <p>Volcanic events are added to EONET when one of our sources reports that there is at least a visible ash emission due to an eruption. Events with physical ejecta (rock or lava) are, of course, also added to EONET. Volcanoes with purely gaseous emissions not containing ash are generally not added to EONET.</p>
        <p>A volcanic event will remain open in EONET for a period of 6-7 weeks after its latest reported activity. Very active volcanoes might not be removed after 6-7 weeks of inactivity if they’ve shown a general tendency to be routinely active over the past year.</p>
        <p>If, after a period of several months’ inactivity, a volcano again becomes active, it is given a new EONET ID for the new period of activity. One volcano can have several EONET IDs over the course of a few years.</p>
        <br>
        <p><i>Sources</i><br>
        Smithsonian/USGS Weekly Volcanic Activity Report</p>
        <br>
        <p><i>Historical Data</i><br>
        While not comprehensive, a few historical eruption events have been included in the EONET database. These are generally from the modern satellite era.
        </p>
        <hr>
      </div>
      <div class="wildfires">
        <h5>Wildfires</h5>
        <p>Most of our wildfire data are replicated from the sources below. Currently EONET only ingests wildfires that have reached an area of 1000 acres (400 hectares) because we have determined that is the minimum (although not absolute) size for a fire to be visible in most NASA remote sensing data sources.</p><br>
        <p><i>Sources</i></p>
        <ul>
          <li><a href="https://wildfire.alberta.ca/">Alberta Wildfire</a></li>
          <li><a href="http://bcwildfire.ca/">British Columbia Wildfire Service</a></li>
          <li><a href="http://www.calfire.ca.gov/">California Department of Forestry and Fire Protection</a></li>
          <li><a href="https://inciweb.nwcg.gov/">InciWeb</a></li>
          <li><a href="https://www.gov.mb.ca/sd/forests_and_lands/wildfire_program/archive/map.html">Manitoba Wildfire Program</a></li>
          <li><a href="https://www.pdc.org/">Pacific Disaster Center</a></li>
        </ul>
        <hr>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Curation',
})
</script>

<style>
  #btn-curation {
    color: white;
    cursor: none;
    font-size: 24px;
    padding: 16px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.3);
  }
  
  .link-curation {
    padding-left: 10px;
  }
</style>
