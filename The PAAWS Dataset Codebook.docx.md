---
layout: default
title: Codebook
permalink: /codebook/
---

# The PAAWS Dataset Codebook 

The PAAWS dataset consists of data from the PAAWS study in which there were three data collection protocols: the Simulated Free Living and Exercise Laboratory (SimFL+Lab) protocol, the Free Living (FL) protocol, and an optional Sleep protocol that took place during the FL protocol and provided labeled PSG data from up to two nights of at-home sleep. In this codebook, we discuss the data that resulted from each protocol, not how it was collected. To review each of the data collection protocols, refer to [The PAAWS Study Data Collection Protocol](https://docs.google.com/document/d/1kgi7MNqh516IOvbND5aj7rMhJ-_FHNIzrDQDF_l2Spc/edit?tab=t.0).

**Table of Contents**

[Overview of Available Data and Directory Structure](#overview-of-available-data-and-directory-structure)

[Available Data and Description of Each Data Type](#available-data-and-description-of-each-data-type)

[Data Summary Table](#data-summary-table)

[Accelerometer Data](#accelerometer-data)

[Partially missing accelerometer data](#partially-missing-accelerometer-data)

[Missing accelerometer data](#fully-missing-accelerometer-data)

[IMU Data (SimFL+Lab Only)](#imu-data-\(simfl+lab-only\))

[Missing IMU data](#missing-imu-data)

[Heart Rate Data (SimFL+Lab Only)](#heart-rate-data-\(simfl+lab-only\))

[Metabolic Data (SimFL+Lab Only)](#metabolic-data-\(simfl+lab-only\))

[Phone Data](#phone-data)

[Phone Data: Ambient Pressure Data](#phone-data:-ambient-pressure-data)

[Phone Data: Light Sensor](#phone-data:-light-sensor)

[Phone Data: Proximity sensor](#phone-data:-proximity-sensor)

[Phone Data: Acceleration](#phone-data:-acceleration)

[Phone Data: App Event Counts](#phone-data:-app-event-counts)

[Phone Data: Notification Logs](#phone-data:-notification-logs)

[Phone Data: Step count](#phone-data:-step-count)

[PSG Sleep Data (Sleep Protocol Only)](#psg-sleep-data-\(sleep-protocol-only\))

[Sleep data scoring](#sleep-data-scoring)

[Waking Day Annotations Data](#waking-day-annotations-data)

[Annotation Label Taxonomy](#annotation-label-taxonomy)

[Notes Data](#notes-data)

[General Note](#general-note)

[Protocol Deviations Notes (SimFL+Lab Only)](#protocol-deviations-notes-\(simfl+lab-only\))

[Recall Notes (FL Only)](#recall-notes-\(fl-only\))

## 

## 

# Overview of Available Data and Directory Structure  {#overview-of-available-data-and-directory-structure}

The dataset is available at TODO. The dataset is organized firstly by collection protocol (e.g., FL, SimFL+Lab, or Sleep) and then by each participant's data for that protocol. All data from a single participant, labeled as DS\_\[ID\], collected during a specific protocol, are stored within the respective protocol subfolder (summarized in [Figure 1](#figure-1.-directory-structure-of-the-paaws-dataset.)).

###### *Figure 1\. Directory structure of the PAAWS dataset.* {#figure-1.-directory-structure-of-the-paaws-dataset.}

`PAAWS_dataset/`  
`├── PAAWS_Data_Summary.csv`  
`├── PAAWS_SimFL_Lab/`  
`│   ├── DS_ID/`  
`│   │   ├── accel/`  
`│   │   │   ├── DS_ID-Lab-RightWristTop.csv`  
`│   │   │   ├── DS_ID-Lab-RightWristBottom.csv`  
`│   │   │   ├── DS_ID-Lab-RightWaistAnterior.csv`  
`│   │   │   ├── DS_ID-Lab-RightWaistMid.csv`  
`│   │   │   ├── DS_ID-Lab-RightWaistPosterior.csv`  
`│   │   │   ├── DS_ID-Lab-RightThigh.csv`  
`│   │   │   ├── DS_ID-Lab-RightAnkleAnterior.csv`  
`│   │   │   ├── DS_ID-Lab-RightAnkleLateral.csv`  
`│   │   │   ├── DS_ID-Lab-RightAnklePosterior.csv`  
`│   │   │   ├── DS_ID-Lab-RightAnkleMedial.csv`  
`│   │   │   ├── DS_ID-Lab-LeftWristTop.csv`  
`│   │   │   ├── DS_ID-Lab-LeftWristBottom.csv`  
`│   │   │   ├── DS_ID-Lab-LeftWaistAnterior.csv`  
`│   │   │   ├── DS_ID-Lab-LeftWaistMid.csv`  
`│   │   │   ├── DS_ID-Lab-LeftWaistPosterior.csv`  
`│   │   │   ├── DS_ID-Lab-LeftThigh.csv`  
`│   │   │   ├── DS_ID-Lab-LeftAnkleAnterior.csv`  
`│   │   │   ├── DS_ID-Lab-LeftAnkleLateral.csv`  
`│   │   │   ├── DS_ID-Lab-LeftAnklePosterior.csv`  
`│   │   │   ├── DS_ID-Lab-LeftAnkleMedial.csv`  
`│   │   │   └── DS_ID-Lab-Phone.csv`  
`│   │   ├── IMU/`  
`│   │   │   ├── DS_ID-Lab-RightWristTop-IMU.csv`  
`│   │   │   ├── DS_ID-Lab-RightWristBottom-IMU.csv`  
`│   │   │   ├── DS_ID-Lab-RightWaistAnterior-IMU.csv`  
`│   │   │   ├── DS_ID-Lab-RightWaistMid-IMU.csv`  
`│   │   │   ├── DS_ID-Lab-RightWaistPosterior-IMU.csv`  
`│   │   │   ├── DS_ID-Lab-RightThigh-IMU.csv`  
`│   │   │   ├── DS_ID-Lab-RightAnkleAnterior-IMU.csv`  
`│   │   │   ├── DS_ID-Lab-RightAnkleLateral-IMU.csv`  
`│   │   │   ├── DS_ID-Lab-RightAnklePosterior-IMU.csv`  
`│   │   │   ├── DS_ID-Lab-RightAnkleMedial-IMU.csv`  
`│   │   │   ├── DS_ID-Lab-LeftWristTop-IMU.csv`  
`│   │   │   ├── DS_ID-Lab-LeftWristBottom-IMU.csv`  
`│   │   │   ├── DS_ID-Lab-LeftWaistAnterior-IMU.csv`  
`│   │   │   ├── DS_ID-Lab-LeftWaistMid-IMU.csv`  
`│   │   │   ├── DS_ID-Lab-LeftWaistPosterior-IMU.csv`  
`│   │   │   ├── DS_ID-Lab-LeftThigh-IMU.csv`  
`│   │   │   ├── DS_ID-Lab-LeftAnkleAnterior-IMU.csv`  
`│   │   │   ├── DS_ID-Lab-LeftAnkleLateral-IMU.csv`  
`│   │   │   ├── DS_ID-Lab-LeftAnklePosterior-IMU.csv`  
`│   │   │   ├── DS_ID-Lab-LeftAnkleMedial-IMU.csv`  
`│   │   │   └── DS_ID-Lab-Phone-IMU.csv`  
`│   │   ├── MET/`  
`│   │   │   └── DS_ID-Lab-MET.csv`  
`│   │   ├── heart_rate/`  
`│   │   │   └── DS_ID-Lab-HR.csv`  
`│   │   ├── phone_data/`  
`│   │   │   ├── DS_ID-Lab-AmbientPressManager.csv`  
`│   │   │   ├── DS_ID-Lab-AppEventCounts.csv`  
`│   │   │   ├── DS_ID-Lab-LightSensorStats.csv`  
`│   │   │   ├── DS_ID-Lab-NotificationCounts.csv`  
`│   │   │   ├── DS_ID-Lab-ProximitySensorManagerService.csv`  
`│   │   │   ├── DS_ID-Lab-StepCounterService.csv`  
`│   │   │   └── DS_ID-Lab-Acceleration.csv`  
`│   │   ├── label/`   
`│   │   │   └── DS_ID-Lab-label.csv`  
`│   │   └── notes/`  
`│   │       ├── DS_ID-Lab-GeneralNote.txt`   
`│   │       └── DS_ID-Lab-DeviationsFromProtocol.csv`   
`│   └── ...`   
`├── PAAWS_FreeLiving/`  
`│   ├── DS_ID/`  
`│   │   ├── accel/`  
`│   │   │   ├── DS_ID-Free-RightWrist.csv`  
`│   │   │   ├── DS_ID-Free-LeftWrist.csv`  
`│   │   │   ├── DS_ID-Free-RightThigh.csv`  
`│   │   │   ├── DS_ID-Free-RightAnkle.csv`  
`│   │   │   ├── DS_ID-Free-RightWaist.csv`  
`│   │   │   └── DS_ID-Free-Phone.csv`  
`│   │   ├── phone_data/`  
`│   │   │   ├── DS_ID-Free-AmbientPressManager.csv`  
`│   │   │   ├── DS_ID-Free-AppEventCounts.csv`  
`│   │   │   ├── DS_ID-Free-LightSensorStats.csv`  
`│   │   │   ├── DS_ID-Free-NotificationCounts.csv`  
`│   │   │   ├── DS_ID-Free-ProximitySensorManagerService.csv`  
`│   │   │   ├── DS_ID-Free-StepCounterService.csv`  
`│   │   │   └── DS_ID-Free-Acceleration.csv`  
`│   │   ├── label/`  
`│   │   │   └── DS_ID-Free-label.csv`  
`│   │   ├── notes/`  
`│   │   │   ├── DS_ID-Free-GeneralBehavior.txt`  
`│   │   │   └── DS_ID-Free-Recalls.csv`  
`|    └── ...`  
`├── PAAWS_sleep/`  
`│   ├── DS_ID/`  
`│   │   ├── DS_ID-Sleep-Night1.edf`  
`│   │   └── DS_ID-Sleep-Night2.edf`  
`│   │   └── DS_ID-Sleep-Night1_scored_events.csv`  
`│   │   └── DS_ID-Sleep-Night2_scored_events.csv`  
`│   └── ...`

# Available Data and Description of Each Data Type {#available-data-and-description-of-each-data-type}

The PAAWS dataset contains raw measurements from multiple sets of sensors for each protocol and human-generated annotations of activity based on an activity taxonomy. 

For each participant (DS\_ID/), the PAAWS\_SimFL\_Lab subfolder contains: 

- [accel/](#accelerometer-data): a folder containing the Accelerometer data collected from twenty on-body and one on-phone ActiGraph GT9X Link sensors.  
- [IMU/](#imu-data-\(simfl+lab-only\)): a folder containing the inertial movement data collected from twenty on-body and one on-phone ActiGraph GT9X Link sensors.  
- [MET/](#metabolic-data-\(simfl+lab-only\)): a folder containing the data collected by the COSMED CPET indirect calorimeter for a subset of the activities in the SimFL+Lab protocol.  
- [heart\_rate/](#heart-rate-data-\(simfl+lab-only\)): a folder containing heart rate data collected from a Polar H10 heart rate monitor.  
- [phone\_data/](#phone-data): a folder containing data collected from participants’ Android devices using a custom-built Android app. These data are only available if the participant owned a compatible Android phone.  
- [labels/](#waking-day-annotations-data): a folder containing second-by-second annotations of the activities done during the SimFL+Lab protocol from third-person footage or, in instances when there was an issue with the third-person footage, front-facing egocentric camera.  
- [notes/](#protocol-deviations-notes-\(simfl+lab-only\)): a folder containing any notes on participant behavior and any deviations from the SimFL+Lab protocol.

The PAAWS\_FreeLiving subfolder contains:

- [accel/](#accelerometer-data): a folder containing the Accelerometer data collected from five on-body and one on-phone ActiGraph GT9X Link sensors.  
- [phone\_data/](#phone-data): a folder containing data collected from participants’ Android devices using a custom-built Android app. These data are only available if the participant owned a compatible Android phone.  
- [labels/](#waking-day-annotations-data): a folder containing second-by-second annotations of the activities done during the FL protocol from an egocentric front-facing camera.  
- [notes/](#recall-notes-\(fl-only\)): a folder containing self-reported data on activity and sleep from daily recall sessions.

For the participants who completed the Sleep protocols, the PAAWS\_Sleep subfolder contains:

- Polysomnography (PSG) data from up to two nights collected using the Noxturnal A1 PSG system at home, during natural sleep  
- Wake/Sleep times, sleep stages, and other sleep-related events (described in [Table 15](#table-15.-all-possible-psg-event-types-in-the-psg-sleep-labels-\(ds_id-sleep-night[1/2]_scored_events.csv\).-an-event-can-either-be-automatically-scored-by-the-noxturnal-psg-software-\(auto\),-automatically-scored-with-expert-edits-\(auto+manual-editing\),-or-scored-only-by-an-expert-sleep-researcher-\(manual\).)) that are manually labeled by trained sleep researchers using the PSG data.

## Data Summary Table {#data-summary-table}

For users of the data curious about understanding demographics, available data, and potential issues with the data by participant, we provide a summary table of the dataset in the /PAAWS\_Data\_Summary.csv file. We define each column header and possible values in [Table 1](#table-1.-column-headings-and-possible-values-in-the-paaws_data_summary.csv-file.).

###### *Table 1\. Column headings and possible values in the PAAWS\_Data\_Summary.csv file.* {#table-1.-column-headings-and-possible-values-in-the-paaws_data_summary.csv-file.}

| Column Name | Description (e.g., This field contains…) | Technical Note |
| :---- | :---- | :---- |
| DATASET | The name of the dataset/participant ID | In the format DS\_ID, where ID is a number between 10 and 305 (inclusive) |
| AGE\_RANGE | The age range of the participant | Can be 18-34, 35 \- 55, or 55+ |
| GENDER | Gender of the participant | Can either be `M` (for Male), `F` for Female, `TM` (for transgender male), `TF` (for transgender female), `NB` (for non gender-conforming), or `Other` (for other or non-disclosure) |
| HEIGHT\_CM | Height, in centimeters |  |
| WEIGHT\_KG | Weight, in kilograms |  |
| LAB\_SHOES | Shoes the participant wore while doing the SimFL+Lab protocol | Can be either `Athletic` (running shoes), `Boots` (hiking or fall boots), `Sneakers` (casual everyday shoes), or `Flipflops` (slippers or crocs) |
| PREFERRED\_WRITING\_HAND | Participant's preferred writing hand. Can be used as a proxy for the participant’s dominant hand | Can either be Left or Right |
| PAAWS\_SIMFL\_LAB | If the participant did the SimFL+Lab protocol | Either Y or N |
| LAB\_ADDITIONAL\_PHONE\_USAGE | If there is additional phone usage data in the SimFL+Lab protocol | Either Y or N |
| PAAWS\_FREELIVING | If the participant did the FL protocol | Either Y or N |
| FREELIVING\_SENSOR\_DAYS | The number of days the participant spent in the PAAWS\_FreeLiving protocol | Range from 1-8 (days) |
| FREELIVING\_LABELED\_DAYS | The number of labelled days of data in the PAAWS\_FreeLiving protocol | Range from 1-8 (days). |
| FREELIVING\_ADDITIONAL\_PHONE\_USAGE | If there is additional phone usage data in the FL protocol | Either Y or N  |
| PAAWS\_SLEEP | The number of nights we collected additional sleep data from the participant as part of the Sleep protocol | Either 0 (participant did not perform the Sleep protocol), 1, or 2 |
| LAB\_\[SENSOR\_LOCATION\] | If we know of any issues with the ActiGraph sensor in \[SENSOR\_LOCATION\] for the SimFL+Lab protocol. The sensors worn during the SimFL+Lab protocol are documented in  [SimFL+Lab Sensor Wear Location.](https://docs.google.com/document/d/1kgi7MNqh516IOvbND5aj7rMhJ-_FHNIzrDQDF_l2Spc/edit?tab=t.0#heading=h.49x2ik5) | Values are in the format `[Availability]/[Optional_Possible_Issues]`   `[Availability]` can either be Y (have data) or N (no data available). In the case data is present but there were issues with the data, the `[Optional_Possible_Issues]` value can be: `Partial` (some data was missing), `Orientation` (sensor was not placed according to the specified orientation), or `Accelerometer_Only` (where the IMU data for this sensor was missing, possibly due to data corruption). |
| FREE\_\[SENSOR\_LOCATION\] | If we know of any issues with the ActiGraph sensor in \[SENSOR\_LOCATION\] for the FL protocol. The sensors worn in the FL protocol are documented in [FL Sensor Wear Location](https://docs.google.com/document/d/1kgi7MNqh516IOvbND5aj7rMhJ-_FHNIzrDQDF_l2Spc/edit?tab=t.0#heading=h.vx1227).  | Values are in the format `[Availability]/[Optional_Possible_Issues]`   `[Availability]` can either be Y (have data) or N (no data available). In the case data are present but there were issues with the data, the `[Optional_Possible_Issues]` value can be: `Partial` (some data was missing), `Orientation` (sensor was not placed according to the specified orientation), or `Issue` (some other participant-specific issues which were documented separately in the participant’s [notes](#general-note)). |

#### 

## Accelerometer Data {#accelerometer-data}

We collected accelerometer data using ActiGraph [GT9X Link sensors](https://s3.amazonaws.com/actigraphcorp.com/wp-content/uploads/2020/03/05155628/ActiGraph_Link_UserGuide_E.200.6001_Revision6_FINAL.pdf) sampling at 80 Hz. Accelerometer data from each sensor are stored in the `accel/` folder following the naming convention: `accel/DS_ID-[Free/Lab]-[SensorWearLocation].csv`. In the FL protocol, data were collected from six wear locations, and in the SimFL+Lab protocol, data were collected from 21 wear locations. Refer to [The PAAWS Study Data Collection Protocol](https://docs.google.com/document/d/1kgi7MNqh516IOvbND5aj7rMhJ-_FHNIzrDQDF_l2Spc/edit?tab=t.0#heading=h.vx1227) for detailed descriptions of sensor wear locations.

We extracted the accelerometer data from each sensor from the raw GT3X file ([a proprietary format by Actigraph](https://github.com/actigraph/ActiLifeManual/blob/main/docs/appendix.rst)) using ActiLife software. We provide accelerometer data in a CSV file with a ten-line header ([Figure 2](#figure-2:-header-generated-by-actilife-software-for-all-accelerometer-data.)).

###### *Figure 2: Header generated by ActiLife software for all accelerometer data.* {#figure-2:-header-generated-by-actilife-software-for-all-accelerometer-data.}

`------------ Data File Created By ActiGraph GT3X+ ActiLife v6.X.X Firmware v1.X.X date format M/d/yyyy at 80 Hz  Filter Normal -----------`  
`Serial Number: TASXXXXXXXX`  
`Start Time HH:MM:SS`  
`Start Date M/d/yyyy`  
`Epoch Period (hh:mm:ss) 00:00:00`  
`Download Time HH:MM:SS`  
`Download Date M/d/yyyy`  
`Current Memory Address: 0`  
`Current Battery Voltage: 3.91     Mode = 12`  
`--------------------------------------------------`

The start time, start date, serial number, and download date fields (shown using **red** text) are sensor-specific (i.e., each sensor has a unique serial number, start date/time, and download date/time). The timestamps of each datapoint can be recovered from the data collection start time using the sampling rate. We provide a script to read accelerometer data into a DataFrame with timestamps in our [git repository](https://github.com/mHealth-Research-Group/WearableDataset). After the header, each accelerometer data CSV file has three columns, corresponding to the acceleration in the three axes ([Table 2](#table-2.-columns-in-the-accelerometer-data-file-\(accel/ds_[id]-[lab/free]-[sensorlocation].csv\).)). 

###### *Table 2\. Columns in the accelerometer data file (accel/DS\_\[ID\]-\[Lab/Free\]-\[SensorLocation\].csv).*  {#table-2.-columns-in-the-accelerometer-data-file-(accel/ds_[id]-[lab/free]-[sensorlocation].csv).}

| Column name | Description | Technical note |
| :---- | :---- | :---- |
| Accelerometer X | Acceleration in the X axis | A floating point number between \-8 and 8\. Unit is in g |
| Accelerometer Y | Acceleration in the Y axis | A floating point number between \-8 and 8\. Unit is in g |
| Accelerometer Z | Acceleration in the Z axis | A floating point number between \-8 and 8\. Unit is in g |

During the data collection protocol, the sensor might be plugged into a docking station (for charging or debugging). When plugged in, the sensor is not collecting data. Accelerometer values for this time period are represented by consecutive rows of zero acceleration across all three axes (e.g., `0,0,0`). 

### Partially missing accelerometer data {#partially-missing-accelerometer-data}

Because the FL protocol spans eight continuous days, a research assistant may have swapped a current sensor with a newer one if a sensor had an issue, such as dying due to battery drain. Swapping a sensor in the middle of the FL protocol may have resulted in some missing data. At the end of the FL protocol, a research assistant combined the data collected from the initial sensors with the swapped-in sensors (see [The PAAWS Study Data Collection Protocol](https://docs.google.com/document/d/1kgi7MNqh516IOvbND5aj7rMhJ-_FHNIzrDQDF_l2Spc/edit?tab=t.0#heading=h.4k668n3) for details on syncing and merging data from different sensors). The result of this process yields an accelerometer file that might seem to have missing data in the case where one sensor died prematurely before the research assistant could swap the sensor. These missing data are documented in their respective [`notes/`](#notes-data) folders.

Missing accelerometer data due to sensors not collecting any data are represented by “blank” lines with no accelerometer values and just two commas (e.g., “,,” as a line in the CSV).  

### Fully missing accelerometer data  {#fully-missing-accelerometer-data}

In some cases, a malfunctioned sensor (e.g., due to a firmware or hardware error) did not collect any data. The entire accelerometer data stream from that sensor was lost, and we documented all such instances both in the [data summary table](#data-summary-table) and in the participants’ [notes](#notes-data) file.

## IMU Data (SimFL+Lab Only)  {#imu-data-(simfl+lab-only)}

While collecting accelerometer data at 80 HZ, we additionally collected IMU data at 100 Hz using the ActiGraph GT9X Link sensors. Because collecting the IMU drains the sensors batteries, IMU data were only collected during the PAAWS SimFL+Lab protocol. The IMU data collected from each sensor are stored in the `IMU/` folder following the naming convention: `IMU/DS_ID-Lab-[WearLocation]-IMU.csv`.  IMU data were collected from all 21 sensor wear locations in the SimFL+Lab protocol (see [The PAAWS Study Data Collection Protocol](https://docs.google.com/document/d/1kgi7MNqh516IOvbND5aj7rMhJ-_FHNIzrDQDF_l2Spc/edit?tab=t.0#heading=h.49x2ik5)).

We extracted the IMU data from raw GT3X files using the R package [AGRead](https://github.com/paulhibbing/AGread). IMU data are provided in CSV format with a ten-line header following ActiGraph’s specification ([Figure 3](#figure-3:-header-generated-by-actilife-software-for-all-imu-data.)).

###### *Figure 3: Header generated by ActiLife software for all IMU data.*  {#figure-3:-header-generated-by-actilife-software-for-all-imu-data.}

`------------ Data File Created By ActiGraph Link IMU 9DOF Sensor ActiLife v6.X.X Firmware v1.X.X date format M/d/yyyy at 100 Hz -----------`  
`Serial Number: TASXXXXXXXXX`  
`Start Time HH:MM:SS`  
`Start Date M/d/yyyy`  
`Epoch Period (hh:mm:ss) 00:00:00`  
`Download Time HH:MM:SS`  
`Download Date M/d/yyyy`  
`Current Memory Address: 0`  
`Current Battery Voltage: 3.91 Mode = 12`  
`--------------------------------------------------`

Like the accelerometer data, the start time, start date, serial number, and download date fields (shown  in red text) are sensor-specific (i.e., each sensor has an unique serial number, start date/time, and download date/time). The timestamp of each datapoint can be recovered from the data collection start time and the sampling rate. We also provide a sample script to read IMU data into a DataFrame with timestamps in our [git repository](https://github.com/paawsstudy/PAAWS?tab=readme-ov-file).  
After the header, each IMU data CSV file has ten columns ([Table 3](#table-3.-columns-in-the-imu-data-file-\(ds_id-lab-[sensorlocation]-imu.csv\).)). 

###### *Table 3\. Columns in the IMU data file (DS\_ID-Lab-\[SensorLocation\]-IMU.csv).*  {#table-3.-columns-in-the-imu-data-file-(ds_id-lab-[sensorlocation]-imu.csv).}

| Column name | Description | Technical note |
| :---- | :---- | :---- |
| Accelerometer X | Acceleration in the X axis | A floating point number between \-8 and 8\. Unit is in g |
| Accelerometer Y | Acceleration in the Y axis | A floating point number between \-8 and 8\. Unit is in g |
| Accelerometer Z | Acceleration in the Z axis | A floating point number between \-8 and 8\. Unit is in g |
| Temperature | Ambient temperature | A floating point number. Unit is in C |
| Magnetometer X | Strength of the magnetic field in the X axis | A floating point number between \-4800 and 4800\. Unit is in micro-T |
| Magnetometer Y | Strength of the magnetic field in the Y axis | A floating point number between \-4800 and 4800\. Unit is in micro-T |
| Magnetometer Z | Strength of the magnetic field in the Z axis | A floating point number between \-4800 and 4800\. Unit is in micro-T |
| Gyroscope X | Speed of the rotation in the X axis | A floating point number between \-2000 and 2000\. Unit is degree/sec |
| Gyroscope Y | Speed of the rotation in the Y axis | A floating point number between \-2000 and 2000\. Unit is degree/sec |
| Gyroscope Z | Speed of the rotation in the Z axis | A floating point number between \-2000 and 2000\. Unit is degree/sec |

### Missing IMU data  {#missing-imu-data}

In some cases, a malfunctioned sensor (e.g., due to a firmware or hardware error) did not collect any data, or an incorrectly initialized sensor did not collect any IMU data. The entire IMU data stream from that sensor was lost, and we documented all such instances both in the [data summary table](#data-summary-table) and in the participants’ [notes](#notes-data) file.

## Heart Rate Data (SimFL+Lab Only) {#heart-rate-data-(simfl+lab-only)}

During the SimFL+Lab protocol, we collected heart rate data using a [Polar H10 heart rate monitor](https://www.polar.com/us-en/sensors/h10-heart-rate-sensor) sampling at 1 Hz. Heart rate data are stored in the `heart_rate/` folder and follow the file naming convention /heart\_rate/`DS_[ID]-Lab-HR.csv`. The HR data CSV for each participant has two columns ([Table 4](#table-4.-columns-in-the-heart-rate-data-file-\(ds_id-lab-hr.csv\).)). 

We parsed the `DS_ID-Lab-HR.csv` file from the original raw AGD file ([a proprietary format by](https://github.com/actigraph/ActiLifeManual/blob/main/docs/appendix.rst) Actigraph). We removed missing data (caused by a poor connection between the H10 sensor and a participant’s skin or a poor connection to the GT9X link device that recorded the HR data). For 16 participants, the raw heart rate data were summarized in 60 s epochs instead of 1 s epochs due to a configuration error; these instances are documented in the [data summary table](#data-summary-table) and in each [participant’s note file](#notes-data).

###### 

###### *Table 4\. Columns in the heart rate data file (DS\_ID-Lab-HR.csv).* {#table-4.-columns-in-the-heart-rate-data-file-(ds_id-lab-hr.csv).}

| Column Name | Description | Technical Note |
| :---- | :---- | :---- |
| Timestamp | The timestamp when this heart rate is recorded  | Timestamp is in the format `YYYY-MM-DD HH:MM:SS` |
| HR | The heart rate | A non-zero integer representing the number of heartbeats per minute |

## Metabolic Data (SimFL+Lab Only) {#metabolic-data-(simfl+lab-only)}

We collected metabolic data via the [Cosmed Quark RMR CPET](https://www.cosmed.com/en/products/cardio-pulmonary-exercise-test/quark-rmr) indirect calorimeter for a subset of activities performed during the SimFL+Lab protocol (see [The PAAWS Study Data Collection Protocol](https://docs.google.com/document/d/1kgi7MNqh516IOvbND5aj7rMhJ-_FHNIzrDQDF_l2Spc/edit?tab=t.0#heading=h.5ferw2w7tz62)). For each activity completed while wearing the metabolic mask, we calculated the metabolic equivalent of task (MET) from the raw data using the following formula:   
MET \= VO2(mL/min)3.5 (mL/kg/min)  Weight (kg).  
Metabolic data are stored in the /MET folder and follow the file name convention DS\_\[ID\]-Lab-MET.csv. Each MET CSV file has three columns ([Table 5](#table-5.-columns-in-the-metabolic-data-file-\(ds_[id]-lab-met.csv\).)).

For each activity we collected metabolic data for, we asked participants to perform the activity long enough to achieve a steady state (each activity had an activity-specific value for how long this might take). In cases when the participant did not perform the activity long enough to achieve a steady state, MET data are missing. Additionally, some data is missing because the metabolic cart could not register breaths that were “too faint” or breaths that leaked outside the mask when the mask became loose.

###### *Table 5\. Columns in the metabolic data file (DS\_\[ID\]-Lab-MET.csv).* {#table-5.-columns-in-the-metabolic-data-file-(ds_[id]-lab-met.csv).}

| Column Name | Description | Technical Note |
| :---- | :---- | :---- |
| START\_TIME | Start time of the activity | Time is a string in the format `YYYY-MM-DD HH:MM:SS`  |
| STOP\_TIME | Stop time of the activity | Time is a string in the format `YYYY-MM-DD HH:MM:SS` |
| PA\_Type | The activity performed | The [Annotation label taxonomy](#annotation-label-taxonomy) section describes the activities set performed with the indirect calorimeter |
| Parsed\_MET | The average breath-by-breath metabolic value taken from the last minute of the activity | A number |

## Phone Data {#phone-data}

Phone data were collected from participants who owned and used a compatible Android device as their personal phone; in such cases, a custom-built Android app was installed on the phone. The phone data includes data from the ambient pressure sensor, light sensor, proximity sensor, accelerometer sensor, data about phone usage (i.e., generic phone usage and notifications sent to the user), and hourly step counts obtained from the Android API.

All data collected from the Android app is stored in the `phone_data/` folder. Phone data CSV files are named according to the data they contain and follow the structure `DS_ID-[Free/Lab]-[DATA_TYPE].csv`. 

### Phone Data: Ambient Pressure Data {#phone-data:-ambient-pressure-data}

The Android phone’s pressure sensor measured the ambient pressure. Data are provided in CSV format with the naming convention: `DS_ID-[Free/Lab]-AmbientPressureManager.csv`. [Table 6](#table-6.-columns-in-the-ambient-pressure-file-\(ds_id-[free/lab]-ambientpressuremanager.csv\).) details the columns in this CSV file. 

###### *Table 6\. Columns in the ambient pressure file (`DS_ID-[Free/Lab]-AmbientPressureManager.csv`).* {#table-6.-columns-in-the-ambient-pressure-file-(ds_id-[free/lab]-ambientpressuremanager.csv).}

| Column Name | Description | Technical Note |
| :---- | :---- | :---- |
| HEADER\_TIME\_STAMP | Time when the ambient pressure was logged | Time in `YYYY-MM-DD HH:MM:SS` format |
| hPa | The ambient pressure | A float. Unit is milibars |
| MAX\_VALUE | The maximum possible value that this sensor can provide | A float |

### Phone Data: Light Sensor {#phone-data:-light-sensor}

Android phone's built-in light sensor measured the ambient light. Data are provided in CSV format with the naming convention: `DS_ID-[Free/Lab]-LightSensorStats.csv`. [Table 8](#table-8.-the-columns-in-the-light-sensor-data-file-\(ds_id-[free/lab]-lightsensorstats.csv\).) details the columns in this CSV file.

###### *Table 8\. The columns in the light sensor data file (`DS_ID-[Free/Lab]-LightSensorStats.csv)`.* {#table-8.-the-columns-in-the-light-sensor-data-file-(ds_id-[free/lab]-lightsensorstats.csv).}

| Column name | Description | Technical note |
| :---- | :---- | :---- |
| HEADER\_TIME\_STAMP | Time when the light sensor data was logged | Time in `YYYY-MM-DD HH:MM:SS` format |
| LUMINANCE | The illuminance recorded | A float. Unit is lux |
| MAX\_VALUE | The maximum possible value that this sensor can provide | A float |

### Phone Data: Proximity sensor {#phone-data:-proximity-sensor}

The Android phones’ proximity sensor measured the approximate distance to an object directly in front of the phone’s face (e.g., the user’s face). Data are provided in CSV format with the naming convention: `DS_ID-[Free/Lab]-ProximitySensorManagerService.csv`. [Table 9](#table-9.-the-columns-in-the-proximity-data-file-\(ds_id-[free/lab]-proximitysensormanagerservice.csv\).) details the columns in this CSV file.

###### *Table 9\. The columns in the proximity data file (`DS_ID-[Free/Lab]-ProximitySensorManagerService.csv)`.* {#table-9.-the-columns-in-the-proximity-data-file-(ds_id-[free/lab]-proximitysensormanagerservice.csv).}

| Column Name | Description | Technical Note |
| :---- | :---- | :---- |
| HEADER\_TIME\_STAMP | Time when the proximity value was logged | Time in `YYYY-MM-DD HH:MM:SS` format |
| PROXIMITY | The proximity value | A float. Unit is cm |
| MAX\_VALUE | The maximum possible value that this sensor can provide | A float  |

### 

### Phone Data: Acceleration {#phone-data:-acceleration}

The Android phone’s built-in accelerometer measured triaxial acceleration data. Data are stored in CSV format with the naming conventions: `DS_ID-[Free/Lab]-Acceleration.csv`. Using the Android API, we set the sampling rate to 50 Hz. Although the Android API tries to keep a constant sampling rate following our settings, the actual sampling rate might not be exactly 50 Hz. [Table 12](#table-12.-the-columns-in-the-acceleration-data-file-\(ds_id-[free/lab]-acceleration.csv\)-.) details the columns in this CSV file.

###### *Table 12\. The columns in the acceleration data file (`DS_ID-[Free/Lab]-Acceleration.csv)` .* {#table-12.-the-columns-in-the-acceleration-data-file-(ds_id-[free/lab]-acceleration.csv)-.}

| Column Name | Description | Technical Note |
| :---- | :---- | :---- |
| HEADER\_TIME\_STAMP | Time when the acceleration was logged | Time in `YYYY-MM-DD HH:MM:SS` format |
| Acceleration X | Acceleration in the X axis | A float, unit is in g |
| Acceleration Y | Acceleration in the Y axis | A float, unit is in g |
| Acceleration Z | Acceleration in the Z axis | A float, unit is in g |

### Phone Data: App Event Counts {#phone-data:-app-event-counts}

We also collected phone usage data (i.e., if the user turned the phone on or if the user launched an application). Data are provided in CSV format with the naming convention: `DS_ID-[Free/Lab]-AppEventCounts.csv`. [Table 7](#table-7.-the-columns-in-the-app-event-counts-file-\(ds_id-[free/lab]-appeventcounts.csv\).) details the columns in this CSV file.

###### *Table 7\. The columns in the app event counts file (`DS_ID-[Free/Lab]-AppEventCounts.csv)`.* {#table-7.-the-columns-in-the-app-event-counts-file-(ds_id-[free/lab]-appeventcounts.csv).}

| Column Name | Description | Technical Note |
| :---- | :---- | :---- |
| HEADER\_TIME\_STAMP | Time when the interaction was logged | Time in `YYYY-MM-DD HH:MM:SS` format |
| PACKAGE\_NAME | The name of the application that participants interacted with | A string representing the app name |
| EVENT\_TYPE | Phone usage and app usage event logs  | A string representing the event logs. The [UsageEvents.Event Android API](https://developer.android.com/reference/android/app/usage/UsageEvents.Event#constants_1) provides a complete list of possible interaction events. Based on our experiments, some of the more important events are “KEYGUARD\_HIDDEN”/ “KEYGUARD\_SHOWN” for screen on/off states, and “MOVE\_TO\_FOREGROUND”/”MOVE\_TO\_BACKGROUND” when users interact with an application or when an application displays notifications in the foreground    |

### Phone Data: Notification Logs {#phone-data:-notification-logs}

We used the Android API to log the package names of notifications sent to the phone. Notification log data are stored in CSV format with the following naming convention: `DS_ID-[Free/Lab]-NotificationCounts.csv`. [Table 10](#table-10.-the-columns-in-the-notification-log-data-file-\(ds_id-[free/lab]-notificationcounts.csv\).) details the columns in this CSV file.

###### 

###### 

###### *Table 10\. The columns in the notification log data file (`DS_ID-[Free/Lab]-NotificationCounts.csv)`.* {#table-10.-the-columns-in-the-notification-log-data-file-(ds_id-[free/lab]-notificationcounts.csv).}

| Column Name | Description | Technical Note |
| :---- | :---- | :---- |
| HEADER\_TIME\_STAMP | The time when any application sends a notification to the user. | Time in `YYYY-MM-DD HH:MM:SS` format |
| PACKAGE\_NAME | The app that created this notification | A string |

### Phone Data: Step count {#phone-data:-step-count}

We used the Android API to track hourly step counts. The step count data are stored in CSV format with the naming convention: `DS_ID-[Free/Lab]-StepCounterService.csv`.  
Step counts are recorded every hour. The step counts at each row reflect the total number of steps that participants took since the previous time step count was recorded. The first value reported in the CSV file is the total number of steps taken since the last time the phone was rebooted. [Table 11](#table-11.-the-columns-in-the-step-count-data-file-\(ds_id-[free/lab]-stepcounterservice.csv\).) details the columns in this CSV file.

###### *Table 11\. The columns in the step count data file (`DS_ID-[Free/Lab]-StepCounterService.csv)`.* {#table-11.-the-columns-in-the-step-count-data-file-(ds_id-[free/lab]-stepcounterservice.csv).}

| Column Name | Description | Technical Note |
| :---- | :---- | :---- |
| HEADER\_TIME\_STAMP | Time when the step count was logged. Each time stamp was sampled at a minimum of one hour apart | Time in `YYYY-MM-DD HH:MM:SS` format |
| STEP\_THIS\_HOUR | The total step counts since the last time step counts were reported. The first value in the file is the total number of steps since the phone was rebooted | An integer |
| STEP\_SINCE\_REBOOT | Number of step counts since the phone was last rebooted | An integer |

## PSG Sleep Data (Sleep Protocol Only) {#psg-sleep-data-(sleep-protocol-only)}

During up to two nights of at-home sleep during the Sleep protocol, polysomnography (PSG) sleep data were recorded using the [Nox A1 PSG system](https://noxmedical.com/products/nox-a1-psg-system/) (see [The PAAWS Study Data Collection Protocol](https://docs.google.com/document/d/1kgi7MNqh516IOvbND5aj7rMhJ-_FHNIzrDQDF_l2Spc/edit?tab=t.0#heading=h.1v1yuxt)). We configured the Nox A1 PSG system not to record audio, but the system still recorded “loudness” (in dB) to determine snoring. The raw PSG sleep data was then scored (labeled) by trained researchers specializing in PSG data to determine the sleep/wake times, sleep stages, and other sleep events. 

PSG data and scored sleep events are stored in the `sleep/` folder. The PSG data are stored in [EDF format](https://edfplus.info/) with the naming convention: `DS_ID-Sleep-Night[1/2].edf`. [Table 13](#table-13.-available-signals-in-the-psg-data-\(ds_id-sleep-night[1/2].edf\)-with-their-corresponding-usage-for-sleep-scoring.) details the different available signals in each EDF file (and their usage for sleep scoring). 

###### *Table 13\. Available signals in the PSG data (`DS_ID-Sleep-Night[1/2].edf)` with their corresponding usage for sleep scoring.* {#table-13.-available-signals-in-the-psg-data-(ds_id-sleep-night[1/2].edf)-with-their-corresponding-usage-for-sleep-scoring.}

| Signal Name | Source Signal(s) (if derived) | Scoring Uses | Signal Description |
| :---- | :---- | :---- | :---- |
| ecg | N/A | Identify ECG arrhythmia | Raw ECG data |
| heart rate | ECG | Primary signal for assessing high/low heart rate and reinforcing ambiguous staging/events, which include HR changes | An R-wave detection algorithm is run to detect each heartbeat in the ECG signal. The instantaneous heart rate is the reciprocal of the intervals between successive heartbeats. The heart rate signal has the unit \[bpm\] (beats per minute) |
| pleth | N/A | Confirm SpO2 signal strength and reliability. Aid in the identification of respiratory events and arousals when few signals are available/reliable | Measure of blood volume changes displayed as pulse oximeter photoplethysmographic (PPG) signal |
| pulse | SpO2 | An alternate signal for assessing high/low heart rate and reinforcing ambiguous staging/events, which include HR changes | Measure of heart rate via pulse oximeter photoplethysmographic (PPG) signal waveform |
| activity | Gravity X and Gravity Y | Reinforce sleep/wake transitions, especially studies scored sleep/wake only | Indication on patient activity/movements. The Activity signal is calculated from raw gravity signals (X and Y axes) measured by a 3-dimensional accelerometer in the Nox recorders. The measured gravity signal is differentiated with respect to time and scaled by the correct scaling factor to create the derived activity signal |
| left leg | N/A | Identify periodic limb movements | Left anterior tibialis EMG activation |
| right leg | N/A | Identify periodic limb movements | Right anterior tibialis EMG activation. |
| abdomen rip | N/A | Differentiate central vs obstructive events based on effort. Alternate signal for identifying apneas and hypopneas. | Estimated changes in lung volume via respiratory inductance plethysmography (RIP) measured at the waist. |
| audio volume db | Audio Volume | Primary signal for identifying snoring to assess central vs. obstructive events and score “snore trains” of \>=4 consecutive snores. | An Audio Volume signal in logarithmic scale (with units of decibels) is automatically calculated from the raw Audio Volume signal, which is in linear scale. The transform used to calculate the signal is V\_dB \= 20 log(x/P\_0), where V\_dB is the volume in decibels, P is the raw audio volume signal (which is a pressure signal with units of Pa) and P\_0 is the reference sound pressure, which has a value of P\_0 \= 20 uPa in the Noxturnal US software |
| flow (aka Cannula Flow) | Raw (Cannula) Pressure | An alternate signal for identifying apneas and hypopneas | The Cannula Flow signal is a qualitative signal derived from the raw nasal Cannula Pressure signal and has the unit \[cmH2O\]. The nasal Cannula Pressure signal is low-pass filtered at 3 Hz and then the cannula flow signal is derived from a non-linear transformation |
| flow limitation | Cannula Pressure | Used to assist in differentiating between central and obstructive hypopnea when clear paradoxical movement exists on RIP belts | The Flow Limitation signal is derived by using a mathematical formula for calculating the flatness of an inhalation |
| nasal pressure | Raw Pressure | An alternate flow signal for identifying apneas and hypopneas | The Nasal (cannula) Pressure signal is calculated on T3 and A1 devices, but in later versions of the devices, the Nasal Pressure signal is calculated in Noxturnal using the Raw Pressure signal, if the Mask Pressure channel is included in the device profile for the recording. The Raw Pressure signal is filtered with a high-pass filter to create the Nasal Pressure signal |
| position | Gravity X and Gravity Y | Reinforce sleep/wake transitions, especially studies that scored sleep/wake only. Assess supine vs. non-supine sleep | Indication of patient posture to discriminate between upright, supine, prone, left, and right positions. The Position signal is created from Gravity X and Gravity Y and is the angle of the rotation of the body. It ranges from \-180° to 180° and is 0° if the patient is facing directly upwards |
| rip sum | RIP Abdomen and RIP Thorax | The primary signal for differentiating central vs obstructive events based on respiratory effort. An alternate signal for identifying apneas and hypopneas | The RIP Sum \[V\] is calculated as the sum of the RIP Abdomen and RIP Thorax signals |
| snore (aka Cannula Snore) | Raw (Cannula) Pressure | An alternate signal for identifying snoring to assess central vs. obstructive events and score "snore trains" of \>=4 consecutive snores | The snoring signal (Cannula Snore) is derived by high-pass filtering a raw nasal Cannula Pressure or airflow signal  |
| spo2 | N/A | Identifying respiratory events and assessing severity based on O2 desaturation | Peripheral Capillary Oxygen Saturation (SpO2) via pulse oximeter spectrophotometry |
| rip flow | RIP Abdomen and RIP Thorax | Primary signal for identifying apnea and hypopnea and assessing central vs. obstructive hypopneas | The belt flow is calculated from a derivative of the sum of the RIP Abdomen and RIP Thorax signals and has the unit \[V/s\] |
| thorax rip | N/A | Differentiate central vs obstructive events based on effort. An alternate effort signal for identifying apneas and hypopneas | Estimated changes in lung volume via respiratory inductance plethysmography (RIP) measured at the thorax |
| 1-2 | 1 (chin EMG) and 2 (chin EMG) | Sleep Staging (arousals, REM transitions) | Derivation of submental EMG activation (Left-Right) |
| 1-F | 1 (chin EMG) and F (chin EMG) | Sleep Staging (arousals, REM transitions) | Derivation of submental EMG activation (Left-Frontal) |
| 2-F | 2 (chin EMG) and F (chin EMG) | Sleep Staging (arousals, REM transitions) | Derivation of submental EMG activation (Right-Frontal) |
| c3-m2 | C3 (EEG) and M2 (EEG) | Sleep Staging (all stages) | Derivation of EEG activity in left central lobe (right mastoid process reference) |
| c4-m1 | C4 (EEG) and M1 (EEG) | Sleep Staging (all stages) | Derivation of EEG activity in right central lobe (left mastoid process reference) |
| e1-m2 | E1 (EOG) and M2 (EEG) | Sleep Staging (sleep/wake transitions, REM) | Derivation of left eye movement (right mastoid process reference) |
| e2-m2 | E2 (EOG) and M2 (EEG) | Sleep Staging (sleep/wake transitions, REM) | Derivation of right eye movement (right mastoid process reference) |
| f3-m2 | F3 (EEG) and M2 (EEG) | Sleep Staging (all stages) | Derivation of EEG activity in the left frontal lobe (right mastoid process reference) |
| f4-m1 | F4 (EEG) and M1 (EEG) | Sleep Staging (all stages) | Derivation of EEG activity in the right frontal lobe (left mastoid process reference) |
| o1-m2 | O1 (EEG) and M2 (EEG) | Sleep Staging (arousals, sleep/wake transitions) | Derivation of EEG activity in the left occipital lobe (right mastoid process reference) |
| o2-m1 | O2 (EEG) and M1 (EEG) | Sleep Staging (arousals, sleep/wake transitions) | Derivation of EEG activity in the right occipital lobe (left mastoid process reference) |

### Sleep data scoring {#sleep-data-scoring}

The scored sleep data (labels for sleep derived from the PSG data) are stored in the `sleep/` folder in CSV format with the naming convention: `DS_ID-Sleep-Night[1/2]_scored_events.csv`. [Table‌ 14](#table-14.-details-of-columns-in-the-scored-sleep-event-file-\(ds_id-sleep-night[1/2]_scored_events.csv\)-derived-from-the-raw-psg-data.) details the different columns provided in the scored events file used to analyze sleep stages and sleep events. Sleep events can be automatically tagged (e.g., different sleeping posture automatically computed by the Noxturnal software), manually tagged (e.g., different sleep stages), or tagged automatically with later manual adjustment (e.g., oxygen desaturation events can be automatically detected but require manual confirmation to ensure the events are not caused by poor connection). All possible sleep events are detailed in [Table 15](#table-15.-all-possible-psg-event-types-in-the-psg-sleep-labels-\(ds_id-sleep-night[1/2]_scored_events.csv\).-an-event-can-either-be-automatically-scored-by-the-noxturnal-psg-software-\(auto\),-automatically-scored-with-expert-edits-\(auto+manual-editing\),-or-scored-only-by-an-expert-sleep-researcher-\(manual\).).

###### *Table 14\. Details of columns in the scored sleep event file (`DS_ID-Sleep-Night[1/2]_scored_events.csv) derived from the raw PSG data`.* {#table-14.-details-of-columns-in-the-scored-sleep-event-file-(ds_id-sleep-night[1/2]_scored_events.csv)-derived-from-the-raw-psg-data.}

| Column Name | Description | Technical Note |
| :---- | :---- | :---- |
| Event | The different events that occurred during sleep. An event can be automatically scored by the Noxturnal software or manually scored by an expert sleep researcher | A string containing the event. Details of all possible events and their meaning are in [Table 15](#table-15.-all-possible-psg-event-types-in-the-psg-sleep-labels-\(ds_id-sleep-night[1/2]_scored_events.csv\).-an-event-can-either-be-automatically-scored-by-the-noxturnal-psg-software-\(auto\),-automatically-scored-with-expert-edits-\(auto+manual-editing\),-or-scored-only-by-an-expert-sleep-researcher-\(manual\).) |
| Duration | Duration of the event | A floating point number, unit is in seconds |
| Start time | Start time of an event | In `YYYY-MM-DD HH:MM:SS` format |
| End time | End time of an event  | In `YYYY-MM-DD HH:MM:SS` format |
| Start epoch | The 30-second epoch during which an event tag begins | An integer |
| End epoch | The 30-second epoch during which an event tag ends | An integer |

###### *Table 15\. All possible PSG event types in the PSG sleep labels (*DS\_ID-Sleep-Night\[1/2\]\_scored\_events.csv)*. An event can either be automatically scored by the Noxturnal PSG software (Auto), automatically scored with expert edits (Auto+manual editing), or scored only by an expert sleep researcher (manual).* {#table-15.-all-possible-psg-event-types-in-the-psg-sleep-labels-(ds_id-sleep-night[1/2]_scored_events.csv).-an-event-can-either-be-automatically-scored-by-the-noxturnal-psg-software-(auto),-automatically-scored-with-expert-edits-(auto+manual-editing),-or-scored-only-by-an-expert-sleep-researcher-(manual).}

| Event Tag | Event | Auto or Manual Scoring | Event Definition |
| :---- | :---- | :---- | :---- |
| Left | Body Position Left | Auto | Participant position left, derived from A1's "gravity" signals |
| Right | Body Position Right | Auto | Participant position right, derived from A1's "gravity" signals |
| Supine | Body Position Supine | Auto | Participant position supine, derived from A1's "gravity" signals |
| Prone | Body Position Prone | Auto | Participant position prone, derived from A1's "gravity" signals |
| Upright | Body Position Upright | Auto | Participant position upright, derived from A1's "gravity" signals |
| Bradycardia | Bradycardia | Auto | A period of Pulse Wave Amplitude signal (derived from oximeter) in which Nox autoscoring detects a BPM of \<40 for \>=20 seconds  |
| Tachycardia | Tachycardia | Auto | A period of Pulse Wave Amplitude signal (derived from oximeter) in which Nox autoscoring detects a BPM of \>100 for \>=20 seconds |
| Warning | Device Warning | Auto | Automated warnings from the A1 device, most commonly "OximeterProbeNotOnFinger" |
| Notification | Device Notification | Auto | Automated warnings from the A1 device, most commonly "DisplayTurnedOn/Off" and "Battery Status 20%, 10%" |
| Single Snore | Single Snore | Auto \+ manual editing | Abrupt, significant increase in A1 Audio Volume dB signal when compared to baseline dB. Nox automated scoring uses an absolute threshold of 65 dB for 0.2-2 seconds to define single snores |
| Snore Train | Snore Train | Auto \+ manual editing | Periods containing \>=3 consecutive single snores |
| Desat | SpO2 desaturation | Auto \+ manual editing | A decrease in SpO2 signal \>= 3% not associated with signal dropout or poor pleth signal |
| Artifact | SpO2 artifact | Auto \+ manual editing | Periods of SpO2 showing sharp drops to low or zero values, abnormally low baselines when compared to other periods of the same PSG, or unreliable SpO2 activity concurrent with poor pleth signal |
| Analysis Start | Lights Out | Manual | The beginning of the analysis period used by Noxturnal for generating reports. This is equivalent to "Lights Out" in many other PSG systems. Analysis Start is based on either the participant-reported time to bed stated in their sleep notes document or the point in the study when all signals are present and largely clear of artifact indicative of a participant that is hooked up but no longer moving |
| Wake | Stage Wake | Manual | 30-second epoch with \>50% containing either or both of: alpha rhythm over the occipital region, and/or other findings consistent with stage wake (e.g., eye blinks, rapid eye movements associated with normal or high chin muscle tone, reading eye movements) |
| N1 | Stage N1 | Manual | 30-second epoch with \>50% containing either or both of: alpha rhythm attenuated and replaced with low-amplitude mixed-frequency (LAMF) EEG, and/or other findings consistent with stage N1 (4-7Hz EEG activity slowing by ≥1 Hz when compared to stage W, vertex sharp waves, slow "rolling" eye movements) |
| N2 | Stage N2 | Manual | 30-second epoch whose first 15 seconds (or preceding 15 seconds from the previous epoch) contains either or both of; K-complexes unassociated with arousals, sleep spindles.) |
| N3 | Stage N3 | Manual | 30-second epoch with \>=20% containing 0.5–2 Hz EEG activity with peak-to-peak amplitude \>75 μV, measured over frontal EEG derivations |
| REM | Stage REM | Manual | 30-second epoch containing low-amplitude, mixed-frequency (LAMF) EEG activity without K complexes or sleep spindles, low chin EMG tone for the majority of the epoch, which is concurrent with REMs, REMs at any position within the epoch. Epochs preceding and contiguous with these epochs are also scored as REM when the following are true; EEG shows LAMF EEG without K-complexes or sleep spindles, chin EMG tone is low, there is no intervening arousal, any arousals are not followed by slow eye movements or stage wake |
| Arousal | EEG Arousal | Manual | An abrupt shift in EEG frequency, including alpha, theta, and/or frequencies greater than 16 Hz (but not spindles) lasting \>=3 seconds, with at least 10 seconds of stable sleep preceding this change. Scoring arousal during REM requires a concurrent increase in submental EMG lasting \>= 1 second. |
| Movement | Major Body Movement | Manual | Abrupt, significant increase in the Activity signal derived from the A1's "gravity" signals |
| LM | Limb Movement | Manual | Abrupt, significant increase in either leg EMG signal with duration 0.5-10 seconds. Manual scoring looks for a \>=8 μV amplitude increase above resting EMG baseline, while Nox autoscoring is based on a 5x increase relative to baseline EMG with a maximum amplitude of 300 uV |
| PLM | Periodic Limb Movement | Manual | Scorable limb movement also meets the criteria to be included in PLMS series |
| PLMS | Periodic Limb Movement Series | Manual | A period containing \>=4 limb movements with an interval of 5-90 seconds between LMs |
| H. Central | Central Hypopnea | Manual | An amplitude decrease on flow and/or effort signals, which starts or ends in an epoch scored as sleep, has a duration of \>=10 seconds, amplitude decrease \>=30% when compared to the same signal during stable breathing, is associated with \>=3% SpO2 desat or EEG arousal, and contains no evidence of obstructed flow |
| H. Obstructive | Obstructive Hypopnea | Manual | An amplitude decrease on flow and/or effort signal,s which starts or ends in an epoch scored as sleep, has a duration of \>=10 seconds, amplitude decrease \>=30% when compared to the same signal during stable breathing, is associated with \>=3% SpO2 desat or EEG arousal, and contains evidence of obstructed flow |
| A. Central | Central Apnea | Manual | A near 100% amplitude decrease in all flow and effort signals, which starts or ends in an epoch scored as sleep, has a duration of \>=10 seconds, and contains no evidence of obstructed flow or RIP breathing effort |
| A. Mixed | Mixed Apnea | Manual | An amplitude decrease on flow and/or effort signals, which starts or ends in an epoch scored as sleep, has a duration of \>=10 seconds, contains one period without evidence of breathing effort and flow obstruction, contains a second period with evidence of flow obstruction and/or RIP breathing effort |
| A. Obstructive | Obstructive Apnea | Manual | An amplitude decrease on flow signal,s which starts or ends in an epoch scored as sleep, has a duration of \>=10 seconds, amplitude decrease \>=90% when compared to the same signal during stable breathing, and contains evidence of RIP breathing effort |

## Waking Day Annotations Data {#waking-day-annotations-data}

During the FL and SimFL+Lab protocols, participants’ movements were captured on video so we could derive after-the-fact waking day annotations of their activities. During the SimFL+Lab protocol, participants were recorded by a research team member from a third-person viewpoint in addition to wearing the front-facing ego-centric camera they wore throughout the FL protocol. During the FL protocol, participants wore an egocentric front-facing camera on a lanyard around their necks during their waking hours. A trained annotator later viewed the camera footage to annotate the participant’s activities with start/end times at up to a second-by-second precision. More information on our annotation protocols and annotator training can be found in [The PAAWS Study Data Collection Protocol](https://docs.google.com/document/d/1kgi7MNqh516IOvbND5aj7rMhJ-_FHNIzrDQDF_l2Spc/edit?tab=t.0#heading=h.28h4qwu).

Annotated labels are stored in each participant’s folder in the `label/` subfolder. The annotation label for each participant is stored in a CSV file with the following naming convention: `DS_ID-[Free/Lab]-label.csv`. Each row in this file represents a distinct activity (a combination of physical activity type, posture, contextual parameters, and high-level behaviors). [Table 16](#table-16.-the-available-columns-in-the-label-file-\(ds_id-[free/lab]-label.csv\).) details each column in this CSV file.

###### *Table 16\. The available columns in the label file (`DS_ID-[Free/Lab]-label.csv`).* {#table-16.-the-available-columns-in-the-label-file-(ds_id-[free/lab]-label.csv).}

| Column Name | Description | Technical Note |
| :---- | :---- | :---- |
| START\_TIME | Start time of the activity | A string in the format `YYYY-MM-DD HH:MM:SS.XXX`  |
| STOP\_TIME | Stop time of the activity | A string in the format `YYYY-MM-DD HH:MM:SS.XXX`  |
| HIGH\_LEVEL\_BEHAVIOR | The overarching high-level activity that might include other lower-level physical activities | A string. Labels are non-mutually exclusive, and different labels are separated by the vertical bar character (“|”) |
| CONTEXTUAL\_PARAMETERS | The contextual parameters that modify a behavior | A string. Labels are non-mutually exclusive, and different labels are separated by the vertical bar character (“|”) |
| PA\_TYPE | The low-level physical activity | A string containing a single label |
| POSTURE | The posture of the participant | A string containing a single label |
| EXPERIMENTAL\_SITUATION | The condition represents where the current activity took place. An activity can be done as part of the Lab portion of the SimFL+Lab protocol (`Lab_Indoors`), or as part of either the SimFL or FL protocol (`Free_Living`). | A string containing a single label |

The annotated labels (as well as all other data that we collected and provided) have been manually synchronized to correct for individual device time drift. Users of the dataset can use the annotation data directly with the acceleration data (or any other data provided).

### Annotation Label Taxonomy {#annotation-label-taxonomy}

To label waking day activities in the PAAWS dataset, we created a custom activity taxonomy. The taxonomy is designed to enable labeling of contextualized free-living activity and posture. Each annotation consists of at least two labels: the participant’s posture (one of 13 mutually exclusive options) and physical activity type (one of 49 mutually exclusive options). The taxonomy covers major activities but balances comprehensiveness with the practical constraint that the more complex the taxonomy is, the more difficult the annotation task becomes.  Activities were selected based on common activities in the American Time Use Survey and those found in other datasets. Researchers using our dataset will not be able to view the original front-facing camera video (used for annotation because we must protect participants' privacy). Therefore, to help researchers using the dataset interpret their results, our annotations also include non-mutually exclusive labels about the participant's “high-level behavior” (HLB) and additional context that may impact the participant's physical activity. The HLB and context labels are meant to provide helpful information when interpreting results detecting activity and posture, but they would need to be used cautiously for model training or evaluation directly because they are non-mutually exclusive and generally have lower inter-rate reliability. 

Specific details about the annotation taxonomy used in the PAAWS study are described in [AnnotationScheme.xlsx](https://docs.google.com/spreadsheets/d/1DrTcPanlhqX8KbyHh8_slOPdM05QJQDH/edit?usp=drive_link&ouid=104002928114711807381&rtpof=true&sd=true). Users of the dataset who have specific questions about the taxonomy or annotator training and practices can leave comments in the annotation taxonomy description [AnnotationScheme.xlsx](https://docs.google.com/spreadsheets/d/1DrTcPanlhqX8KbyHh8_slOPdM05QJQDH/edit?usp=drive_link&ouid=104002928114711807381&rtpof=true&sd=true).

## Notes Data {#notes-data}

During both the FL and SimFL+Lab protocols, a research assistant took notes regarding general participant behavior and possible deviations from either protocol. Additionally, a research assistant performed daily recall sessions with each participant during the FL protocol and recorded their responses. The `notes/` folder contains all notes taken during a specific participant's data collection. 

### General Note {#general-note}

General notes on participants’ behaviors or any equipment issues are provided as a raw text file with the naming convention: `DS_ID-[Free/Lab]-GeneralNotes.txt`. This note might provide additional context on how participants behaved or whether there are special circumstances (e.g., participant had a prosthetic leg) during the data collection process that data users should consider. 

### Protocol Deviations Notes (SimFL+Lab Only) {#protocol-deviations-notes-(simfl+lab-only)}

We provide detailed notes on possible deviations from the usual protocol in the SimFL+Lab session. These notes are in CSV format with the naming convention `DS_[ID]-Lab-ProtocolDeviations.csv.`Each row in the `DS_[ID]-Lab-ProtocolDeviations.csv` represents an instance where the participant did not follow the instructions in our protocol, or there was a sensor wear deviation (e.g., a sensor was not worn at a given moment).. The column names for the protocol deviation notes are defined in [Table 17](#table-17.-detailed-description-for-each-column-in-the-computer-readable-note-file-\(ds_id-lab-protocoldeviations.csv\)-from-simfl+lab-session).

###### *Table 17\.  Detailed description for each column in the computer-readable note file (DS\_ID-Lab-ProtocolDeviations.csv) from SimFL+Lab session* {#table-17.-detailed-description-for-each-column-in-the-computer-readable-note-file-(ds_id-lab-protocoldeviations.csv)-from-simfl+lab-session}

| Column name | Description | Technical note |
| :---- | :---- | :---- |
| START\_TIME | The starting time of this note item  | A string written in the format `M/DD/YYYY HH:MM:SS` |
| STOP\_TIME | The stop time of a note item. Some events might not have a stop time if the time is not reported or is not applicable | A string written in the format `M/DD/YYYY HH:MM:SS` |
| NOTE\_TYPE | The type of this note item. This is useful for quickly filtering out certain events of interest, especially for automated processing | All possible note types are: `sensor_not_worn,sensor_fell_off, deviation_from_protocol.`  |
| SENSOR | What sensors were affected for this note item | Possible sensors to (not) wear are: `Accelerometer/IMU` (Actigraph GT9X devices), `HR_Monitor` (heart rate monitor), `MET_Cart` (the metabolic mask) |
| PROTOCOL\_ACTIVITY\_AFFECTED | What activities were affected | A string representing the protocol affected. A detailed list of activities performed in the lab is provided in [SimFL+Lab data collection protocol](#heading=h.qsh70q). |

### Recall Notes (FL Only) {#recall-notes-(fl-only)}

We also provide detailed notes from the daily recall sessions during the FL protocol. These notes encompass self-report data included recalled activities, sensor wear issues. These notes are in CSV format with the following naming convention: `DS_ID-Free-RecallNotes.csv`.

Each row in the `DS_ID-Free-RecallNotes.csv` file represents an item that the participant reported to the researcher during the daily recall sessions. The columns of the recall notes CSV files are defined in [Table 18](#table-18.-detailed-description-for-each-column-in-the-computer-readable-recall-note-\(ds_id-free-recallnotes.csv\)-from-free-living-session). [Table 19](#table-19.-details-of-possible-values-in-the-value-column-and-sensor-column-for-each-value-in-the-note_type-column-used-in-the-computer-readable-recall-notes-file-\(ds_id-free-recallnotes.csv\)-from-free-living-data-collection-protocol.) further details possible values in the VALUE column and SENSOR column for each value in the NOTE\_TYPE column.

###### *Table 18\. Detailed description for each column in the computer-readable recall note (DS\_ID-Free-RecallNotes.csv) from free-living session* {#table-18.-detailed-description-for-each-column-in-the-computer-readable-recall-note-(ds_id-free-recallnotes.csv)-from-free-living-session}

| Column Name | Description | Technical Note |
| :---- | :---- | :---- |
| START\_TIME | The starting time of this note  | A string written in the format `M/D/YYYY HH:MM:SS`. In some cases, participants self-reported their activities but did not provide a start time. These events will not have a start time, and this field might be left blank.   |
| STOP\_TIME | The stop time of this note  | A string written in the format `M/D/YYYY HH:MM:SS.` In some cases, participants self-reported their activities but did not provide a start time. These events will not have a start time, and this field might be left blank.  |
| NOTE\_TYPE | The note type of this note item. This is useful for quickly filtering out certain events of interest, especially for automated processing | All possible note types are: `self_report_in_bed, self_report_sleep, sensor_not_worn,sensor_malfunction activity_recall, camera_not_worn_self_report, PSG_report_sleep, camera_not_worn_self_report, sensor_not_worn_self_report, study_length`. Each note type (and the associated possible values) are explained in [Table 19](#table-19.-details-of-possible-values-in-the-value-column-and-sensor-column-for-each-value-in-the-note_type-column-used-in-the-computer-readable-recall-notes-file-\(ds_id-free-recallnotes.csv\)-from-free-living-data-collection-protocol.) |
| SENSOR | This field explains what sensor was not worn (either identified by self-report or manual checking).This value is non-null exclusively with the `sensor_not_worn` and `sensor_not_worn_self_report` note type | The possible values are: `Accelerometer` (Actigraph GT9X devices) and `PSG` (Noxturnal A1 PSG system) |
| VALUE | For certain values of `NOTE_TYPE`, we provide a value. Table 19 details the possible combination of values in the `NOTE_TYPE` and `VALUE` columns. | Values of this column can either be a number between 0-10 (inclusive), or one of the following: `water_based_activity, researcher_related, battery_issue, sensor_malfunction, sensor_disruption_other`. |
| RECALL\_POSTURE | For the `activity_recall` note type, this field represents the self-report posture of the participant during a time when they reported not wearing a camera. This field will be left blank if the self-report recall does not include a posture | Any string as defined in our [posture annotation taxonomy](https://docs.google.com/spreadsheets/d/1JO5Bp0kTu2F4VXi_1tkIa7ZfdTqZ1uii/edit?gid=267223360#gid=267223360) |
| RECALL\_PA\_TYPE | For the `activity_recall` note type, this field (if filled in) represents the self-report physical activity of the participant during a time when they reported not wearing a camera. This field will be left blank if the self-report recall does not include a physical activity type | Any string as defined in the [physical activity annotation taxonomy](https://docs.google.com/spreadsheets/d/1JO5Bp0kTu2F4VXi_1tkIa7ZfdTqZ1uii/edit?gid=447677499#gid=447677499) |
| RECALL\_HLB | For the activity\_recall note type, this field (if filled in) represents the self-report high-level behavior of the participant during a time when they reported not wearing a camera. This field will be left blank if the self-report recall does not include a high-level behavior | Any string or combination of strings from the [high-level behavior annotation scheme](https://docs.google.com/spreadsheets/d/1JO5Bp0kTu2F4VXi_1tkIa7ZfdTqZ1uii/edit?gid=155082695#gid=155082695). Multiple values are separated using “|” as the delimiter |
| RECALL\_CP | For the a`ctivity_recall` note type, this field (if filled in) represents the self-report contextual parameters of the participant during a time when they reported not wearing a camera. This field will be left blank if the self-report recall does not include a contextual parameter | Any string or combination of strings from the [contextual parameter annotation scheme](https://docs.google.com/spreadsheets/d/1JO5Bp0kTu2F4VXi_1tkIa7ZfdTqZ1uii/edit?gid=732460168#gid=732460168). Multiple values are separated using “|” as the delimiter |
| NOTE | Provides additional context on the note | General comments from a research assistant clarifying unusual situations  |

###### *Table 19\. Details of possible values in the VALUE column and SENSOR column for each value in the NOTE\_TYPE column used in the computer-readable recall notes file (DS\_ID-Free-RecallNotes.csv) from free-living data collection protocol.* {#table-19.-details-of-possible-values-in-the-value-column-and-sensor-column-for-each-value-in-the-note_type-column-used-in-the-computer-readable-recall-notes-file-(ds_id-free-recallnotes.csv)-from-free-living-data-collection-protocol.}

| NOTE\_TYPE | Description | SENSOR | VALUE |
| :---- | :---- | :---- | :---- |
| self\_report\_in\_bed | Timeframe participant reported being in bed | N/A | N/A |
| self\_report\_sleep | Timeframe participant reported being asleep | N/A | A number between 0-10 (inclusive) representing the self-report sleep quality of that night using a “reverse scale,” where 0 represents the best possible sleep quality, and 10 represents the worst possible sleep quality |
| sensor\_not\_worn | Time that a trained researcher determined that a sensor was not worn using Signaligner | The only possible value is `Accelerometer` (Actigraph GT9X devices) | N/A |
| sensor\_malfunction | Time that a trained researcher determined that a sensor malfunctioned and collected incorrect data (see [The PAAWS Study Data Collection Protocol](https://docs.google.com/document/d/1kgi7MNqh516IOvbND5aj7rMhJ-_FHNIzrDQDF_l2Spc/edit?tab=t.0#heading=h.3l18frh) for details on how this was determined) | This field represents the sensor type that was affected by this issue.  Possible sensors with non-wear during the FL protocol are  `Accelerometer` (Actigraph GT9X devices) and `PSG` (for sleep) | N/A |
| activity\_recall | Participant’s reported activity during a time where footage is not available. The activity is described using the annotation scheme and is provided in the RECALL\_POS, RECALL\_PA, RECALL\_HLB, RECALL\_CP for posture, physical activity, high level behavior, and contextual parameters respectively | N/A | N/A |
| PSG\_report\_sleep | Time the participant fell asleep, obtained from scoring PSG data | N/A | N/A |
| camera\_not\_worn\_self\_report | Participant’s reported camera not worn time. This usually occurs just before the participant was going to bed and just after getting out of bed | N/A | N/A |
| sensor\_not\_worn\_self\_report | Participant’s reported sensor non-wear time | This field represents what sensor was not worn. Possible sensors with nonwear are `Accelerometer` (Actigraph GT9X devices) and `PSG` (for sleep) | Reasons given for why the sensor was not worn. Possible values are: `battery_issue` (devices have battery issues; usually low batteries), `water_based_activity` (taken off when showering or swimming), `sensor_malfunction` (sensor is broken), `researcher_related` (a researcher needed that sensor taken off for study purposes; usually for SimFL+Lab session), `sensor_disruption_other` (some other issues that will be explained in the Additional\_Note section) |
| study\_length | The duration of FL protocol. Data collected outside this interval of time should be ignored. This note denotes the timeframe the participant wore all sensors for the FL study | N/A | N/A |

 
