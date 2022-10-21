import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Select from "react-select";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";


import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import NoImage from "../../assets/img/image.png";
import { addNewDriverActionThunk, getDriverByIdActionThunk, updateDriverActionthunk } from "../../store/drivers/drivers.actions.async";
import TRootState from "../../store/root.types";
import { useFormik } from "formik";
import { BarsLoader } from "../../components/loader/Loader";

const AssignGeofence = [
  { value: "Blue Nile1", label: "Blue Nile1" },
  { value: "Blue Nile2", label: "Blue Nile2" },
];

const SelectCountryCode = [
  {
    value: "Afghanistan",
    label: "93",
  },
  {
    value: "Albania",
    label: "355",
  },
  {
    value: "Algeria",
    label: "213",
  },
  {
    value: "American Samoa",
    label: "1-684",
  },
  {
    value: "Andorra",
    label: "376",
  },
  {
    value: "Angola",
    label: "244",
  },
  {
    value: "Anguilla",
    label: "1-264",
  },
  {
    value: "Antarctica",
    label: "672",
  },
  {
    value: "Antigua and Barbuda",
    label: "1-268",
  },
  {
    value: "Argentina",
    label: "54",
  },
  {
    value: "Armenia",
    label: "374",
  },
  {
    value: "Aruba",
    label: "297",
  },
  {
    value: "Australia",
    label: "61",
  },
  {
    value: "Austria",
    label: "43",
  },
  {
    value: "Azerbaijan",
    label: "994",
  },
  {
    value: "Bahamas",
    label: "1-242",
  },
  {
    value: "Bahrain",
    label: "973",
  },
  {
    value: "Bangladesh",
    label: "880",
  },
  {
    value: "Barbados",
    label: "1-246",
  },
  {
    value: "Belarus",
    label: "375",
  },
  {
    value: "Belgium",
    label: "32",
  },
  {
    value: "Belize",
    label: "501",
  },
  {
    value: "Benin",
    label: "229",
  },
  {
    value: "Bermuda",
    label: "1-441",
  },
  {
    value: "Bhutan",
    label: "975",
  },
  {
    value: "Bolivia",
    label: "591",
  },
  {
    value: "Bosnia and Herzegovina",
    label: "387",
  },
  {
    value: "Botswana",
    label: "267",
  },
  {
    value: "Brazil",
    label: "55",
  },
  {
    value: "British Indian Ocean Territory",
    label: "246",
  },
  {
    value: "British Virgin Islands",
    label: "1-284",
  },
  {
    value: "Brunei",
    label: "673",
  },
  {
    value: "Bulgaria",
    label: "359",
  },
  {
    value: "Burkina Faso",
    label: "226",
  },
  {
    value: "Burundi",
    label: "257",
  },
  {
    value: "Cambodia",
    label: "855",
  },
  {
    value: "Cameroon",
    label: "237",
  },
  {
    value: "Canada",
    label: "1",
  },
  {
    value: "Cape Verde",
    label: "238",
  },
  {
    value: "Cayman Islands",
    label: "1-345",
  },
  {
    value: "Central African Republic",
    label: "236",
  },
  {
    value: "Chad",
    label: "235",
  },
  {
    value: "Chile",
    label: "56",
  },
  {
    value: "China",
    label: "86",
  },
  {
    value: "Christmas Island",
    label: "61",
  },
  {
    value: "Cocos Islands",
    label: "61",
  },
  {
    value: "Colombia",
    label: "57",
  },
  {
    value: "Comoros",
    label: "269",
  },
  {
    value: "Cook Islands",
    label: "682",
  },
  {
    value: "Costa Rica",
    label: "506",
  },
  {
    value: "Croatia",
    label: "385",
  },
  {
    value: "Cuba",
    label: "53",
  },
  {
    value: "Curacao",
    label: "599",
  },
  {
    value: "Cyprus",
    label: "357",
  },
  {
    value: "Czech Republic",
    label: "420",
  },
  {
    value: "Democratic Republic of the Congo",
    label: "243",
  },
  {
    value: "Denmark",
    label: "45",
  },
  {
    value: "Djibouti",
    label: "253",
  },
  {
    value: "Dominica",
    label: "1-767",
  },
  {
    value: "Dominican Republic",
    label: "1-809, 1-829, 1-849",
  },
  {
    value: "East Timor",
    label: "670",
  },
  {
    value: "Ecuador",
    label: "593",
  },
  {
    value: "Egypt",
    label: "20",
  },
  {
    value: "El Salvador",
    label: "503",
  },
  {
    value: "Equatorial Guinea",
    label: "240",
  },
  {
    value: "Eritrea",
    label: "291",
  },
  {
    value: "Estonia",
    label: "372",
  },
  {
    value: "Ethiopia",
    label: "251",
  },
  {
    value: "Falkland Islands",
    label: "500",
  },
  {
    value: "Faroe Islands",
    label: "298",
  },
  {
    value: "Fiji",
    label: "679",
  },
  {
    value: "Finland",
    label: "358",
  },
  {
    value: "France",
    label: "33",
  },
  {
    value: "French Polynesia",
    label: "689",
  },
  {
    value: "Gabon",
    label: "241",
  },
  {
    value: "Gambia",
    label: "220",
  },
  {
    value: "Georgia",
    label: "995",
  },
  {
    value: "Germany",
    label: "49",
  },
  {
    value: "Ghana",
    label: "233",
  },
  {
    value: "Gibraltar",
    label: "350",
  },
  {
    value: "Greece",
    label: "30",
  },
  {
    value: "Greenland",
    label: "299",
  },
  {
    value: "Grenada",
    label: "1-473",
  },
  {
    value: "Guam",
    label: "1-671",
  },
  {
    value: "Guatemala",
    label: "502",
  },
  {
    value: "Guernsey",
    label: "44-1481",
  },
  {
    value: "Guinea",
    label: "224",
  },
  {
    value: "Guinea-Bissau",
    label: "245",
  },
  {
    value: "Guyana",
    label: "592",
  },
  {
    value: "Haiti",
    label: "509",
  },
  {
    value: "Honduras",
    label: "504",
  },
  {
    value: "Hong Kong",
    label: "852",
  },
  {
    value: "Hungary",
    label: "36",
  },
  {
    value: "Iceland",
    label: "354",
  },
  {
    value: "India",
    label: "91",
  },
  {
    value: "Indonesia",
    label: "62",
  },
  {
    value: "Iran",
    label: "98",
  },
  {
    value: "Iraq",
    label: "964",
  },
  {
    value: "Ireland",
    label: "353",
  },
  {
    value: "Isle of Man",
    label: "44-1624",
  },
  {
    value: "Israel",
    label: "972",
  },
  {
    value: "Italy",
    label: "39",
  },
  {
    value: "Ivory Coast",
    label: "225",
  },
  {
    value: "Jamaica",
    label: "1-876",
  },
  {
    value: "Japan",
    label: "81",
  },
  {
    value: "Jersey",
    label: "44-1534",
  },
  {
    value: "Jordan",
    label: "962",
  },
  {
    value: "Kazakhstan",
    label: "7",
  },
  {
    value: "Kenya",
    label: "254",
  },
  {
    value: "Kiribati",
    label: "686",
  },
  {
    value: "Kosovo",
    label: "383",
  },
  {
    value: "Kuwait",
    label: "965",
  },
  {
    value: "Kyrgyzstan",
    label: "996",
  },
  {
    value: "Laos",
    label: "856",
  },
  {
    value: "Latvia",
    label: "371",
  },
  {
    value: "Lebanon",
    label: "961",
  },
  {
    value: "Lesotho",
    label: "266",
  },
  {
    value: "Liberia",
    label: "231",
  },
  {
    value: "Libya",
    label: "218",
  },
  {
    value: "Liechtenstein",
    label: "423",
  },
  {
    value: "Lithuania",
    label: "370",
  },
  {
    value: "Luxembourg",
    label: "352",
  },
  {
    value: "Macao",
    label: "853",
  },
  {
    value: "Macedonia",
    label: "389",
  },
  {
    value: "Madagascar",
    label: "261",
  },
  {
    value: "Malawi",
    label: "265",
  },
  {
    value: "Malaysia",
    label: "60",
  },
  {
    value: "Maldives",
    label: "960",
  },
  {
    value: "Mali",
    label: "223",
  },
  {
    value: "Malta",
    label: "356",
  },
  {
    value: "Marshall Islands",
    label: "692",
  },
  {
    value: "Mauritania",
    label: "222",
  },
  {
    value: "Mauritius",
    label: "230",
  },
  {
    value: "Mayotte",
    label: "262",
  },
  {
    value: "Mexico",
    label: "52",
  },
  {
    value: "Micronesia",
    label: "691",
  },
  {
    value: "Moldova",
    label: "373",
  },
  {
    value: "Monaco",
    label: "377",
  },
  {
    value: "Mongolia",
    label: "976",
  },
  {
    value: "Montenegro",
    label: "382",
  },
  {
    value: "Montserrat",
    label: "1-664",
  },
  {
    value: "Morocco",
    label: "212",
  },
  {
    value: "Mozambique",
    label: "258",
  },
  {
    value: "Myanmar",
    label: "95",
  },
  {
    value: "Namibia",
    label: "264",
  },
  {
    value: "Nauru",
    label: "674",
  },
  {
    value: "Nepal",
    label: "977",
  },
  {
    value: "Netherlands",
    label: "31",
  },
  {
    value: "Netherlands Antilles",
    label: "599",
  },
  {
    value: "New Caledonia",
    label: "687",
  },
  {
    value: "New Zealand",
    label: "64",
  },
  {
    value: "Nicaragua",
    label: "505",
  },
  {
    value: "Niger",
    label: "227",
  },
  {
    value: "Nigeria",
    label: "234",
  },
  {
    value: "Niue",
    label: "683",
  },
  {
    value: "North Korea",
    label: "850",
  },
  {
    value: "Northern Mariana Islands",
    label: "1-670",
  },
  {
    value: "Norway",
    label: "47",
  },
  {
    value: "Oman",
    label: "968",
  },
  {
    value: "Pakistan",
    label: "92",
  },
  {
    value: "Palau",
    label: "680",
  },
  {
    value: "Palestine",
    label: "970",
  },
  {
    value: "Panama",
    label: "507",
  },
  {
    value: "Papua New Guinea",
    label: "675",
  },
  {
    value: "Paraguay",
    label: "595",
  },
  {
    value: "Peru",
    label: "51",
  },
  {
    value: "Philippines",
    label: "63",
  },
  {
    value: "Pitcairn",
    label: "64",
  },
  {
    value: "Poland",
    label: "48",
  },
  {
    value: "Portugal",
    label: "351",
  },
  {
    value: "Puerto Rico",
    label: "1-787, 1-939",
  },
  {
    value: "Qatar",
    label: "974",
  },
  {
    value: "Republic of the Congo",
    label: "242",
  },
  {
    value: "Reunion",
    label: "262",
  },
  {
    value: "Romania",
    label: "40",
  },
  {
    value: "Russia",
    label: "7",
  },
  {
    value: "Rwanda",
    label: "250",
  },
  {
    value: "Saint Barthelemy",
    label: "590",
  },
  {
    value: "Saint Helena",
    label: "290",
  },
  {
    value: "Saint Kitts and Nevis",
    label: "1-869",
  },
  {
    value: "Saint Lucia",
    label: "1-758",
  },
  {
    value: "Saint Martin",
    label: "590",
  },
  {
    value: "Saint Pierre and Miquelon",
    label: "508",
  },
  {
    value: "Saint Vincent and the Grenadines",
    label: "1-784",
  },
  {
    value: "Samoa",
    label: "685",
  },
  {
    value: "San Marino",
    label: "378",
  },
  {
    value: "Sao Tome and Principe",
    label: "239",
  },
  {
    value: "Saudi Arabia",
    label: "966",
  },
  {
    value: "Senegal",
    label: "221",
  },
  {
    value: "Serbia",
    label: "381",
  },
  {
    value: "Seychelles",
    label: "248",
  },
  {
    value: "Sierra Leone",
    label: "232",
  },
  {
    value: "Singapore",
    label: "65",
  },
  {
    value: "Sint Maarten",
    label: "1-721",
  },
  {
    value: "Slovakia",
    label: "421",
  },
  {
    value: "Slovenia",
    label: "386",
  },
  {
    value: "Solomon Islands",
    label: "677",
  },
  {
    value: "Somalia",
    label: "252",
  },
  {
    value: "South Africa",
    label: "27",
  },
  {
    value: "South Korea",
    label: "82",
  },
  {
    value: "South Sudan",
    label: "211",
  },
  {
    value: "Spain",
    label: "34",
  },
  {
    value: "Sri Lanka",
    label: "94",
  },
  {
    value: "Sudan",
    label: "249",
  },
  {
    value: "Suriname",
    label: "597",
  },
  {
    value: "Svalbard and Jan Mayen",
    label: "47",
  },
  {
    value: "Swaziland",
    label: "268",
  },
  {
    value: "Sweden",
    label: "46",
  },
  {
    value: "Switzerland",
    label: "41",
  },
  {
    value: "Syria",
    label: "963",
  },
  {
    value: "Taiwan",
    label: "886",
  },
  {
    value: "Tajikistan",
    label: "992",
  },
  {
    value: "Tanzania",
    label: "255",
  },
  {
    value: "Thailand",
    label: "66",
  },
  {
    value: "Togo",
    label: "228",
  },
  {
    value: "Tokelau",
    label: "690",
  },
  {
    value: "Tonga",
    label: "676",
  },
  {
    value: "Trinidad and Tobago",
    label: "1-868",
  },
  {
    value: "Tunisia",
    label: "216",
  },
  {
    value: "Turkey",
    label: "90",
  },
  {
    value: "Turkmenistan",
    label: "993",
  },
  {
    value: "Turks and Caicos Islands",
    label: "1-649",
  },
  {
    value: "Tuvalu",
    label: "688",
  },
  {
    value: "U.S. Virgin Islands",
    label: "1-340",
  },
  {
    value: "Uganda",
    label: "256",
  },
  {
    value: "Ukraine",
    label: "380",
  },
  {
    value: "United Arab Emirates",
    label: "971",
  },
  {
    value: "United Kingdom",
    label: "44",
  },
  {
    value: "United States",
    label: "1",
  },
  {
    value: "Uruguay",
    label: "598",
  },
  {
    value: "Uzbekistan",
    label: "998",
  },
  {
    value: "Vanuatu",
    label: "678",
  },
  {
    value: "Vatican",
    label: "379",
  },
  {
    value: "Venezuela",
    label: "58",
  },
  {
    value: "Vietnam",
    label: "84",
  },
  {
    value: "Wallis and Futuna",
    label: "681",
  },
  {
    value: "Western Sahara",
    label: "212",
  },
  {
    value: "Yemen",
    label: "967",
  },
  {
    value: "Zambia",
    label: "260",
  },
  {
    value: "Zimbabwe",
    label: "263",
  }

];

const Form: React.FC = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const dispatch = useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

  const { driverId } = params;
  const { state } = location;
  const { loading, singleDriverData: { driver, timeSlots } } = useSelector((state: TRootState) => state?.drivers)

  const [show, setShow] = useState<boolean>(false);
  const [selectedValue2, setSelectedValue2] = useState("All");
  const [passwordShown, setPasswordShown] = useState<boolean>(false)


  const handleClose = () => {
    setShow(false);
  };

  const handleRedirectToDrivers = () => {
    navigate("/drivers", { state: { page: state?.page } });
  };

  const handleRedirectToGeofence = () => {
    navigate("/geofences/form");
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    if (driverId !== "new") {
      driverId && dispatch(getDriverByIdActionThunk(driverId))
    }
  }, [dispatch, driverId])

  const driverEditeSchema = yup.object().shape({
    fullName: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Enter valid email"),
    countryCode: yup.string().required("Country code is required"),
    password: yup.string().required("Password is required"),
    mobileNumber: yup.string().required("Mobile number is reqired").matches(/^\d{10}$/, "Mobile number is not valid"),
    location: yup.string().required("location is required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: driverEditeSchema,
    initialValues: {
      fullName: driver?.driver?.fullName ? String(driver?.driver?.fullName) : "",
      countryCode: "",
      mobileNumber: (driver && driver?.driver?.mobileNumber) || "",
      email: driver?.driver?.email ? String(driver?.driver?.email) : "",
      location: (driver && driver?.location?.latLong) || "",
      password: ""
    },
    onSubmit: ((values, { resetForm }) => {

      if (driverId === "new") {
        dispatch(addNewDriverActionThunk(values?.fullName, values?.email, values?.countryCode, values?.mobileNumber, values?.password, "driver", handleRedirectToDrivers, undefined, undefined, undefined, undefined));
      } else {
        dispatch(updateDriverActionthunk("driver", driverId, values?.fullName, values?.mobileNumber, values?.email, values?.password, handleRedirectToDrivers));
      }
    })
  })

  const { errors, touched } = formik;

  return (
    <React.Fragment>
      <div id="app">
        <div className="d-block d-lg-none">
          <Sidebar />
        </div>
        <div className="content-wrapper">
          <Header />
          <div className="content">
            <header className="page-header">
              <div className="d-flex align-items-center">
                <div className="mr-auto">
                  <h1>{driverId === "new" ? "Add" : "Edit"} Driver</h1>
                </div>
                <div className="m-l-10">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleRedirectToDrivers()}
                  >
                    <i className="fa fa-angle-left">&nbsp;</i> Back
                  </button>
                </div>
              </div>
            </header>
            <section className="page-content container-fluid">
              <div className="card">
                {
                  loading ? (<BarsLoader />) : (
                    <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                      <div className="card-body">
                        <div className="d-flex flex-wrap">
                          <div className="left-form-content">
                            <div
                              className="fileinput text-center fileinput-new"
                              data-provides="fileinput"
                            >
                              <div className="btn-file mt-3">
                                <div
                                  className="thumbnail fileinput-new uploaded-user-image rounded-circle"
                                  style={{ height: "150px", width: "150px" }}
                                >
                                  <img src={NoImage} alt="no pic" />
                                </div>
                                <div className="clearfix"></div>
                                <button className="fileinput-new btn btn-primary2 btn-sm btn-file mt-3">

                                  Browse Image
                                </button>
                                <input type="hidden" value="" name="..." />
                                <input type="hidden" value="" name="Users[image]" />
                                <input
                                  type="file"
                                  file-model="myFile"
                                  name=""
                                  accept=""
                                />
                                <div
                                  className="fileinput-preview fileinput-exists thumbnail uploaded-user-image rounded-circle"
                                  style={{ height: "150", width: "150" }}
                                ></div>
                              </div>
                              <div className="text-center">
                                <button
                                  className="btn btn-link btn-sm fileinput-exists mt-3"
                                  data-dismiss="fileinput"
                                >
                                  Remove
                                </button>
                              </div>
                              <div className="clearfix mt-3">
                                <p className="upload-img-label text-muted">
                                  *Recommended Size:
                                  <br />
                                  Minimum 250 * 250
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row flex">
                            <div className="col-xl-8">
                              <div className="form-row" data-select2-id="12">
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label className="control-label">
                                      Full name
                                    </label>
                                    <input
                                      type="text"
                                      name="fullName"
                                      className="form-control"
                                      value={formik?.values?.fullName}
                                      onChange={formik?.handleChange}
                                    />
                                    {errors.fullName && touched.fullName && (
                                      <div className="text-danger">{errors?.fullName}</div>
                                    )}
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label className="control-label">
                                      Mobile Number
                                    </label>
                                    <div className="input-group">
                                      <div className="input-group-prepend">
                                        <div className="">
                                          <Select
                                            className="custom-select-dropdown"
                                            name="countryCode"
                                            id="countryCode"
                                            value={SelectCountryCode?.find(elem => formik?.values?.countryCode === elem?.label)}
                                            onChange={(e) => e && (formik.values.countryCode = e?.label)}
                                            options={SelectCountryCode}
                                          />
                                        </div>
                                      </div>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        value={formik?.values?.mobileNumber}
                                        onChange={formik?.handleChange}
                                        name="mobileNumber"
                                      />
                                    </div>
                                    <div className="text-danger">{(errors?.mobileNumber && touched?.mobileNumber) ? errors?.mobileNumber : (errors?.countryCode && touched?.countryCode) ? errors?.countryCode : ""}</div>
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label className="control-label">Email</label>
                                    <input
                                      type="text"
                                      placeholder="Email"
                                      name="email"
                                      className="form-control"
                                      value={formik.values.email}
                                      onChange={formik.handleChange}
                                    />
                                    {errors.email && touched.email && (
                                      <div className="text-danger">{errors.email}</div>
                                    )}
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label className="control-label">
                                      Password
                                    </label>
                                    <div className="input-group">
                                      <input
                                        type={passwordShown ? "text" : "password"}
                                        className="form-control"
                                        id="password-field"
                                        name="password"
                                        data-toggle="password"
                                        autoComplete="off"
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                      />
                                      <div className="input-group-append">
                                        <button
                                          className="btn btn-secondary px-2 button-with-textbox"
                                          type="button"
                                          onClick={togglePassword}
                                        >
                                          <i className={`fa fa-eye${passwordShown ? "-slash" : ""} mb-1 toggle-password`}></i>
                                        </button>
                                      </div>
                                    </div>
                                    {errors?.password && touched?.password && (
                                      <div className="text-danger">{errors?.password}</div>
                                    )}
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label className="control-label">
                                      Assign Geofence
                                    </label>
                                    <Select
                                      name="location"
                                      id="location"
                                      className="custom-select-dropdown min-w-200"
                                      value={SelectCountryCode?.find(elem => formik?.values?.location === elem?.value)}
                                      onChange={(e) => e && (formik.values.location = e?.value)}
                                      options={AssignGeofence}
                                    />
                                    {errors?.location && touched?.location && (
                                      <div className="text-danger">{errors?.location}</div>
                                    )}
                                  </div>
                                </div>

                                <div className="col-sm-6">
                                  <div className="form-group">
                                    <label className="control-label d-block mb-1">
                                      &nbsp;
                                    </label>
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                      onClick={handleRedirectToGeofence}
                                    >
                                      Add New Geofence
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer bg-light text-right">
                        <button
                          type="button"
                          className="btn btn-secondary clear-form mr-2"
                          onClick={handleRedirectToDrivers}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  )
                }

              </div>
            </section>
          </div>
        </div>
      </div>
      <Modal centered size="lg" show={show} onHide={() => handleClose()}>
        <Modal.Header>
          <h4 className="modal-title">Truck Location</h4>
          <button className="close" onClick={() => handleClose()}>
            <span aria-hidden="true" className="zmdi zmdi-close"></span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <iframe
            title=" "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8219652911444!2d72.49649711496726!3d22.993573384967775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84576f8f3c2d%3A0x43df72e8efb0b1ac!2sPeerbits!5e0!3m2!1sen!2sin!4v1635418479463!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Form;
