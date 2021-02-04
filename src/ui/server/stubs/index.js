// For stub documentation see: https://www.npmjs.com/package/stubby
/* istanbul ignore next */
module.exports = [
  {
    request: {
      url: /\/v1\/applications\/.*\/sources/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `[
				{
					"id": "sparqsurvey",
					"label": "Sparq Survey"
				},
				{
					"id": "salesforce",
					"label": "Salesforce"
				}
		]`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.*\/fields\/sparqsurvey\/07e10211-8580-0918-31b1-92cbbd2a3e65/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{"items":[
				{
					"id": "00e10211-8580-0918-31b1-92cbbd2a3e65",
					"label": "Male"
				},
				{
					"id": "01e10211-8580-0918-31b1-92cbbd2a3e65",
					"label": "Female"
				},
				{
					"id": "02e10211-8580-0918-31b1-92cbbd2a3e65",
					"label": "Other"
				}
			]}`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.*\/fields\/sparqsurvey\/08e10211-8580-0918-31b1-92cbbd2a3e65/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{"items":[
				{
					"id": "00e10211-8580-0918-31b1-92cbbd2a3e65",
					"label": "Porsche"
				},
				{
					"id": "01e10211-8580-0918-31b1-92cbbd2a3e65",
					"label": "Ferrari"
				},
				{
					"id": "02e10211-8580-0918-31b1-92cbbd2a3e65",
					"label": "Tesla"
				}
			]}`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.*\/fields\/sparqsurvey\/0e10211-8580-0918-31b1-92cbbd2a3e65/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `
			{"items":[
        {
          "id": "2276777990",
          "name": "Sign-up instructions",
          "type": "InstructionText",
          "datatype": "string",
          "text": "Before joining the discussion in our forum, please answer a few questions about yourself. This should take only a few minutes.",
          "label": "Sign-up instructions",
          "guidid": "7485eeac-f511-4024-8e98-0f24f2b043dd",
          "order": "1",
          "state": "Alive"
        },
        {
          "id": "2276778990",
          "name": "First name",
          "type": "OpenEnd",
          "datatype": "string",
          "text": "First name",
          "label": "First name",
          "guidid": "51aa785e-492b-41ac-a208-412e172fa79d",
          "order": "2",
          "state": "Alive"
        },
        {
          "id": "2276779990",
          "name": "Last Name",
          "type": "OpenEnd",
          "datatype": "string",
          "text": "Last Name",
          "label": "Last Name",
          "guidid": "ed66a31c-f4a6-4728-aac7-d43b0f6194a3",
          "order": "3",
          "state": "Alive"
        },
        {
          "id": "8888888885",
          "name": "Birth month",
          "type": "SingleChoice",
          "datatype": "enum",
          "text": "Birth month",
          "label": "Birth month",
          "guidid": "05c6134a-4465-47fe-975d-d4f61923152c",
          "order": "4",
          "state": "Alive"
        },
        {
          "id": "2276781990",
          "name": "Birth year (Slider Test)",
          "type": "Numeric",
          "datatype": "double",
          "range": "[1900,2020]",
          "text": "Birth year (Slider Test)",
          "label": "Birth year (Slider Test)",
          "guidid": "abad66e1-bade-4905-bc44-ee4d6d249a03",
          "order": "5",
          "state": "Alive"
        },
        {
          "id": "2276782990",
          "name": "Favourite Number",
          "type": "Numeric",
          "datatype": "double",
          "text": "Favourite Number",
          "label": "Favourite Number",
          "guidid": "abad66e1-bade-4905-bc44-ee4d6d249a03",
          "order": "6",
          "state": "Alive"
        },
        {
          "id": "2276783990",
          "name": "City",
          "type": "OpenEnd",
          "datatype": "string",
          "text": "City",
          "label": "City",
          "guidid": "b0ec0185-cb45-4574-bb7d-72dfb41a1a90",
          "order": "7",
          "state": "Alive"
        },
        {
          "id": "2276784990",
          "name": "Country",
          "type": "OpenEnd",
          "datatype": "string",
          "text": "Country",
          "label": "Country",
          "guidid": "9e6b6447-2255-40cd-8132-d1e75b8aa9c3",
          "order": "8",
          "state": "Alive"
        },
        {
          "id": "2276785990",
          "name": "Postal code",
          "type": "OpenEnd",
          "datatype": "string",
          "text": "Postal code",
          "label": "Postal code",
          "guidid": "b129da48-7ef7-4ccc-9f6f-818c641fb8f8",
          "order": "9",
          "state": "Alive"
        },
        {
          "id": "2276786990",
          "name": "Phone number",
          "type": "OpenEnd",
          "datatype": "string",
          "text": "Phone number",
          "label": "Phone number",
          "guidid": "6d74d896-1ab4-4f5a-a963-d5cc5c0c5e3b",
          "order": "10",
          "state": "Alive"
        },
        {
          "id": "2276787990",
          "name": "Email",
          "type": "OpenEnd",
          "datatype": "string",
          "text": "Email",
          "label": "Email",
          "guidid": "bc1fe258-852e-4235-af89-d5fa63febfed",
          "order": "11",
          "state": "Alive"
        },
        {
          "id": "8888888886",
          "name": "Gender",
          "type": "SingleChoice",
          "datatype": "enum",
          "text": "Gender",
          "label": "Gender",
          "guidid": "285504e8-9876-4aeb-be60-1131cd79cc53",
          "order": "12",
          "state": "Alive"
        },
        {
          "id": "8888888887",
          "name": "Household income",
          "type": "SingleChoice",
          "datatype": "enum",
          "text": "Pick the range that best describes the total annual income of your household, before taxes.",
          "label": "Household income",
          "guidid": "5bfb35ca-3193-4af7-8930-c1428249ba61",
          "order": "13",
          "state": "Alive"
        },
        {
          "id": "8888888888",
          "name": "Education",
          "type": "SingleChoice",
          "datatype": "enum",
          "text": "Please select the highest level of education you've completed.",
          "label": "Education",
          "guidid": "81175192-16b0-445c-a51d-68e280e1b423",
          "order": "14",
          "state": "Alive"
        }
      ]}
		`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.*\/fields\/sparqsurvey\/01e10211-8580-0918-31b1-92cbbd2a3e65/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{"items":[
        {
          "id": "2277220990",
          "name": "UserAgent",
          "type": "OpenEnd",
          "datatype": "string",
          "label": "UserAgent",
          "guidid": "7fa87d3d-b427-4da6-b5fc-b70ab9a10a70",
          "order": "14",
          "state": "Alive"
        },
        {
          "id": "8888888889",
          "name": "DisplayType",
          "type": "SingleChoice",
          "datatype": "enum",
          "label": "DisplayType",
          "guidid": "315b3b44-1bcb-4d96-a1a3-e6cf963d5f8d",
          "order": "13",
          "state": "Alive"
        },
        {
          "id": "8888888810",
          "name": "RespondentLocale",
          "type": "SingleChoice",
          "datatype": "enum",
          "label": "RespondentLocale",
          "guidid": "23ad4961-ad09-503b-bf8b-4e7b7b1c9ee4",
          "order": "15",
          "state": "Alive"
        },
        {
          "id": "8888888811",
          "name": "Gender",
          "type": "SingleChoice",
          "datatype": "enum",
          "text": "Gender",
          "label": "Gender",
          "guidid": "6be5c1c6-d016-492f-aae3-46bccbe93576",
          "order": "7",
          "state": "Alive"
        },
        {
          "id": "2325798990",
          "name": "Fav Number",
          "type": "Numeric",
          "datatype": "double",
          "label": "Fav Number",
          "guidid": "1763e1b9-c84b-4bd7-ab10-5293b26b86aa",
          "order": "8",
          "state": "Alive"
        },
        {
          "id": "2325800990",
          "name": "Birthdate",
          "type": "DateTime",
          "datatype": "datetime",
          "label": "Birthdate",
          "guidid": "1c8f0981-019a-40ad-a3b2-7a952c333026",
          "order": "9",
          "state": "Alive"
        },
        {
          "id": "2325802990",
          "name": "Fav Cars",
          "type": "MultiChoice",
          "datatype": "set",
          "label": "Fav Cars",
          "guidid": "cffecfcb-e44a-41e0-a8a0-651ff098da87",
          "order": "10",
          "state": "Alive"
        },
        {
          "id": "2325804990",
          "name": "Review",
          "type": "OpenEnd",
          "datatype": "string",
          "label": "Review",
          "guidid": "dda27a2b-f770-483e-8548-38d74fd74446",
          "order": "11",
          "state": "Alive"
        },
        {
          "id": "2506742990",
          "name": "This is the question name",
          "type": "MultiChoiceGrid",
          "text": "Whaddya think?",
          "label": "This is the question name",
          "guidid": "4b396ee8-f3f0-4696-8e20-7e3971a2406b",
          "state": "Alive"
        }
      ]}`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.*\/fields\/sparqsurvey\/02e10211-8580-0918-31b1-92cbbd2a3e65/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{"items":[
        {
          "id": "2548485990",
          "name": "UserAgent",
          "type": "OpenEnd",
          "datatype": "string",
          "label": "UserAgent",
          "guidid": "b6171eb0-e942-47f2-b855-38fbca8bc73c",
          "order": "7",
          "state": "Alive"
        },
        {
          "id": "8888888812",
          "name": "DisplayType",
          "type": "SingleChoice",
          "datatype": "enum",
          "label": "DisplayType",
          "guidid": "8bf85968-2636-43f6-a2c1-063551f5266c",
          "order": "6",
          "state": "Alive"
        },
        {
          "id": "8888888813",
          "name": "RespondentLocale",
          "type": "SingleChoice",
          "datatype": "enum",
          "label": "RespondentLocale",
          "guidid": "b56d5ec7-06c4-598e-a3be-86d9161c24d3",
          "state": "Alive",
          "order": "8"
        },
        {
          "id": "8888888814",
          "name": "Single Choice",
          "type": "SingleChoice",
          "datatype": "enum",
          "guidid": "315de69f-306b-4bd9-8867-190239bc1e47",
          "order": "1",
          "state": "Alive",
          "label": "Single Choice"
        },
        {
          "id": "9999999992",
          "name": "Multiple Choice",
          "type": "MultiChoice",
          "datatype": "set",
          "guidid": "ffb54991-ab5c-4930-b108-eb312c447417",
          "order": "2",
          "state": "Alive",
          "label": "Multiple Choice"
        },
        {
          "id": "2548497990",
          "name": "Long Answer",
          "type": "OpenEnd",
          "datatype": "string",
          "guidid": "e6fdd374-2676-40bf-ab84-7d1e43724708",
          "order": "3",
          "state": "Alive",
          "label": "Long Answer"
        },
        {
          "id": "2548499990",
          "name": "Number",
          "type": "Numeric",
          "datatype": "double",
          "label": "Number",
          "guidid": "ff8ce1c4-22b0-456d-9124-29091d9728fa",
          "order": "4",
          "state": "Alive"
        }
      ]}`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.*\/fields\/sparqsurvey\/03e10211-8580-0918-31b1-92cbbd2a3e65/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{"items":[
        {
          "id": "2523933990",
          "name": "UserAgent",
          "type": "OpenEnd",
          "datatype": "string",
          "guidid": "70ab1df2-ec60-41cf-a67f-49686fb745bc",
          "order": "4",
          "state": "Alive",
          "label": "UserAgent"
        },
        {
          "id": "8888888815",
          "name": "DisplayType",
          "type": "SingleChoice",
          "datatype": "enum",
          "label": "DisplayType",
          "guidid": "315b7be1-e38a-4612-a20e-3ae1cc4eacfe",
          "order": "3",
          "state": "Alive"
        },
        {
          "id": "2523937990",
          "name": "NPS",
          "type": "Nps",
          "datatype": "double",
          "range": "[0,10]",
          "guidid": "d96a39fc-adf4-4f4d-90a8-3b913b5b7985",
          "order": "1",
          "state": "Alive",
          "text": "How likely are you to recommend us to a friend/colleague?",
          "label": "NPS"
        },
        {
          "id": "8888888816",
          "name": "RespondentLocale",
          "type": "SingleChoice",
          "datatype": "enum",
          "guidid": "9cd28eb2-c3c2-50fe-b49a-acbae7988b17",
          "order": "5",
          "state": "Alive",
          "label": "RespondentLocale"
        },
        {
          "id": "8888888817",
          "name": "Gender",
          "type": "SingleChoice",
          "datatype": "enum",
          "guidid": "33d245db-0444-4379-afe5-e215749a7c56",
          "order": "2",
          "state": "Alive",
          "text": "what is your gender?",
          "label": "Gender"
        }
      ]}`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.*\/fields\/sparqsurvey\/04e10211-8580-0918-31b1-92cbbd2a3e65/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{"items":[
        {
          "id": "2544258990",
          "name": "UserAgent",
          "type": "OpenEnd",
          "datatype": "string",
          "label": "UserAgent",
          "guidid": "eecc5c2a-270b-467f-ab06-dfb12ba071a9",
          "state": "Alive",
          "order": "20"
        },
        {
          "id": "8888888880",
          "name": "DisplayType",
          "type": "SingleChoice",
          "datatype": "enum",
          "label": "DisplayType",
          "guidid": "7c6b209b-ab7a-4823-b1fb-535cf3f8cc4e",
          "state": "Alive",
          "order": "19"
        },
        {
          "id": "8888888881",
          "name": "Single Choice",
          "type": "SingleChoice",
          "datatype": "enum",
          "guidid": "760c7490-dfe4-4793-87d6-5ad68cd5450b",
          "order": "1",
          "state": "Alive",
          "text": "<p>Single Choice Question</p>",
          "label": "Single Choice"
        },
        {
          "id": "8888888882",
          "name": "RespondentLocale",
          "type": "SingleChoice",
          "datatype": "enum",
          "label": "RespondentLocale",
          "guidid": "b745b4e5-af45-5cdc-bc4b-2d1750ffaf8c",
          "state": "Alive",
          "order": "21"
        },
        {
          "id": "9999999993",
          "name": "Multiple Choice",
          "type": "MultiChoice",
          "datatype": "set",
          "text": "<p>Multiple Choice Question</p>",
          "label": "Multiple Choice",
          "guidid": "9b35a39a-7e28-4c16-b809-9f19319cae2a",
          "order": "2",
          "state": "Alive"
        },
        {
          "id": "2544268990",
          "name": "Net Promoter Score",
          "type": "Nps",
          "datatype": "double",
          "range": "[0, 10]",
          "text": "NPS Question",
          "label": "Net Promoter Score",
          "guidid": "ab0a1976-9f53-495b-bf6a-13ee1ee9df93",
          "order": "3",
          "state": "Alive"
        },
        {
          "id": "2544270990",
          "name": "Single Choice Grid",
          "type": "SingleChoiceGrid",
          "text": "<p>Single Choice Grid Question</p>",
          "label": "Single Choice Grid",
          "guidid": "b80c5598-437c-4c38-b315-2ad347df7012",
          "state": "Alive"
        },
        {
          "id": "8888888883",
          "type": "SingleChoice",
          "datatype": "enum",
          "guidid": "364e8f7d-6b70-48b3-a7fe-cd592e0a6054",
          "order": "4",
          "state": "Alive",
          "name": "scg row 1",
          "text": "scg row 1",
          "label": "scg row 1"
        },
        {
          "id": "8888888884",
          "name": "scg row 2",
          "type": "SingleChoice",
          "datatype": "enum",
          "guidid": "d30dfd88-bb10-498a-82dd-fde30314fc63",
          "order": "5",
          "state": "Alive",
          "text": "scg row 2",
          "label": "scg row 2"
        },
        {
          "id": "2544274990",
          "name": "Multiple Choice Grid",
          "text": "<p>Multiple Choice Grid Question</p>",
          "type": "MultiChoiceGrid",
          "label": "Multiple Choice Grid",
          "guidid": "42ea5265-184f-49e3-a22f-585d38cd7465",
          "state": "Alive"
        },
        {
          "id": "9999999994",
          "type": "MultiChoice",
          "datatype": "set",
          "guidid": "05065d68-87b9-4f0a-8db6-022cc687e9cd",
          "order": "6",
          "state": "Alive",
          "name": "mcg row1",
          "text": "mcg row1",
          "label": "mcg row1"
        },
        {
          "id": "2544351990",
          "name": "Allocation",
          "type": "AllocationGrid",
          "text": "<p>Allocation Question</p>",
          "label": "Allocation",
          "guidid": "e91c18bd-2d8c-43bd-a0fc-fc0d0aab17f6",
          "state": "Alive"
        },
        {
          "id": "2544419990",
          "name": "Rank Order",
          "type": "RankOrderGrid",
          "text": "<p>Rank Order Question</p>",
          "label": "Rank Order",
          "guidid": "d47a46c0-a0d6-434d-bfce-e60899bf8a42",
          "state": "Alive"
        },
        {
          "id": "2544423990",
          "name": "Short Answer",
          "type": "OpenEnd",
          "datatype": "string",
          "guidid": "b8a40543-9ea4-4506-a350-3c8e6e1cb24f",
          "order": "12",
          "state": "Alive",
          "text": "<p>Short Answer Question</p>",
          "label": "Short Answer"
        },
        {
          "id": "2544425990",
          "name": "Long Answer",
          "type": "OpenEnd",
          "datatype": "string",
          "text": "<p>Long Answer Question</p>",
          "label": "Long Answer",
          "guidid": "0a31a0ec-76d5-46a8-8913-4598ecb9783a",
          "order": "13",
          "state": "Alive"
        },
        {
          "id": "2544427990",
          "name": "Number",
          "type": "Numeric",
          "datatype": "double",
          "guidid": "c66fbc6c-f477-48e5-8294-d60a98ce7c8d",
          "order": "14",
          "state": "Alive",
          "text": "<p>Number Question</p>",
          "label": "Number"
        },
        {
          "id": "2544429990",
          "name": "Date",
          "type": "DateTime",
          "datatype": "datetime",
          "guidid": "9bf22135-bdc0-441b-9922-cbc3bcd8b241",
          "order": "15",
          "state": "Alive",
          "text": "<p>Date Question</p>",
          "label": "Date"
        },
        {
          "id": "2544431990",
          "name": "Email",
          "type": "OpenEnd",
          "datatype": "string",
          "text": "<p>Email Question</p>",
          "label": "Email",
          "guidid": "f69907dd-793c-4f0a-b7b8-7f70e913ea99",
          "order": "16",
          "state": "Alive"
        },
        {
          "id": "2544433990",
          "name": "Zip / Postal Code",
          "type": "OpenEnd",
          "datatype": "string",
          "label": "Zip / Postal Code",
          "guidid": "678de740-b6eb-4f91-8c3a-41bddd1777af",
          "order": "17",
          "state": "Alive",
          "text": "<p>Zip / Postal Code Question</p>"
        },
        {
          "id": "2544435990",
          "name": "Phone Number",
          "type": "OpenEnd",
          "datatype": "string",
          "guidid": "72480f2a-c1f9-4676-9ea1-2c8d2545e77d",
          "order": "18",
          "state": "Alive",
          "text": "<p>Phone Number Question</p>",
          "label": "Phone Number"
        }
      ]}`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.*\/fields\/sparqsurvey\/05e10211-8580-0918-31b1-92cbbd2a3e65/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{"items":[
        {
          "id": "2544258990",
          "name": "UserAgent",
          "type": "OpenEnd",
          "datatype": "string",
          "label": "UserAgent",
          "guidid": "eecc5c2a-270b-467f-ab06-dfb12ba071a9",
          "state": "Alive",
          "order": "20"
        },
        {
          "id": "8888888818",
          "name": "DisplayType",
          "type": "SingleChoice",
          "datatype": "enum",
          "label": "DisplayType",
          "guidid": "7c6b209b-ab7a-4823-b1fb-535cf3f8cc4e",
          "state": "Alive",
          "order": "19"
        },
        {
          "id": "8888888819",
          "name": "Single Choice",
          "type": "SingleChoice",
          "datatype": "enum",
          "guidid": "760c7490-dfe4-4793-87d6-5ad68cd5450b",
          "order": "1",
          "state": "Alive",
          "text": "<p>Single Choice Question</p>",
          "label": "Single Choice"
        },
        {
          "id": "8888888820",
          "name": "RespondentLocale",
          "type": "SingleChoice",
          "datatype": "enum",
          "label": "RespondentLocale",
          "guidid": "b745b4e5-af45-5cdc-bc4b-2d1750ffaf8c",
          "state": "Alive",
          "order": "21"
        },
        {
          "id": "9999999995",
          "name": "Multiple Choice",
          "type": "MultiChoice",
          "datatype": "set",
          "text": "<p>Multiple Choice Question</p>",
          "label": "Multiple Choice",
          "guidid": "9b35a39a-7e28-4c16-b809-9f19319cae2a",
          "order": "2",
          "state": "Alive"
        },
        {
          "id": "2544268990",
          "name": "Net Promoter Score",
          "type": "Nps",
          "datatype": "double",
          "range": "[0, 10]",
          "text": "NPS Question",
          "label": "Net Promoter Score",
          "guidid": "ab0a1976-9f53-495b-bf6a-13ee1ee9df93",
          "order": "3",
          "state": "Alive"
        },
        {
          "id": "8888888821",
          "name": "Single Choice Grid",
          "type": "SingleChoiceGrid",
          "text": "<p>Single Choice Grid Question</p>",
          "label": "Single Choice Grid",
          "guidid": "b80c5598-437c-4c38-b315-2ad347df7012",
          "state": "Alive"
        },
        {
          "id": "8888888822",
          "type": "SingleChoice",
          "datatype": "enum",
          "guidid": "364e8f7d-6b70-48b3-a7fe-cd592e0a6054",
          "order": "4",
          "state": "Alive",
          "name": "scg row 1",
          "text": "scg row 1",
          "label": "scg row 1"
        },
        {
          "id": "8888888823",
          "name": "scg row 2",
          "type": "SingleChoice",
          "datatype": "enum",
          "guidid": "d30dfd88-bb10-498a-82dd-fde30314fc63",
          "order": "5",
          "state": "Alive",
          "text": "scg row 2",
          "label": "scg row 2"
        },
        {
          "id": "9999999996",
          "name": "Multiple Choice Grid",
          "text": "<p>Multiple Choice Grid Question</p>",
          "type": "MultiChoiceGrid",
          "label": "Multiple Choice Grid",
          "guidid": "42ea5265-184f-49e3-a22f-585d38cd7465",
          "state": "Alive"
        },
        {
          "id": "9999999997",
          "type": "MultiChoice",
          "datatype": "set",
          "guidid": "05065d68-87b9-4f0a-8db6-022cc687e9cd",
          "order": "6",
          "state": "Alive",
          "name": "mcg row1",
          "text": "mcg row1",
          "label": "mcg row1"
        },
        {
          "id": "2544351990",
          "name": "Allocation",
          "type": "AllocationGrid",
          "text": "<p>Allocation Question</p>",
          "label": "Allocation",
          "guidid": "e91c18bd-2d8c-43bd-a0fc-fc0d0aab17f6",
          "state": "Alive"
        },
        {
          "id": "2544419990",
          "name": "Rank Order",
          "type": "RankOrderGrid",
          "text": "<p>Rank Order Question</p>",
          "label": "Rank Order",
          "guidid": "d47a46c0-a0d6-434d-bfce-e60899bf8a42",
          "state": "Alive"
        },
        {
          "id": "2544423990",
          "name": "Short Answer",
          "type": "OpenEnd",
          "datatype": "string",
          "guidid": "b8a40543-9ea4-4506-a350-3c8e6e1cb24f",
          "order": "12",
          "state": "Alive",
          "text": "<p>Short Answer Question</p>",
          "label": "Short Answer"
        },
        {
          "id": "2544425990",
          "name": "Long Answer",
          "type": "OpenEnd",
          "datatype": "string",
          "text": "<p>Long Answer Question</p>",
          "label": "Long Answer",
          "guidid": "0a31a0ec-76d5-46a8-8913-4598ecb9783a",
          "order": "13",
          "state": "Alive"
        },
        {
          "id": "2544427990",
          "name": "Number",
          "type": "Numeric",
          "datatype": "double",
          "guidid": "c66fbc6c-f477-48e5-8294-d60a98ce7c8d",
          "order": "14",
          "state": "Alive",
          "text": "<p>Number Question</p>",
          "label": "Number"
        },
        {
          "id": "2544429990",
          "name": "Date",
          "type": "DateTime",
          "datatype": "datetime",
          "guidid": "9bf22135-bdc0-441b-9922-cbc3bcd8b241",
          "order": "15",
          "state": "Alive",
          "text": "<p>Date Question</p>",
          "label": "Date"
        },
        {
          "id": "2544431990",
          "name": "Email",
          "type": "OpenEnd",
          "datatype": "string",
          "text": "<p>Email Question</p>",
          "label": "Email",
          "guidid": "f69907dd-793c-4f0a-b7b8-7f70e913ea99",
          "order": "16",
          "state": "Alive"
        },
        {
          "id": "2544433990",
          "name": "Zip / Postal Code",
          "type": "OpenEnd",
          "datatype": "string",
          "label": "Zip / Postal Code",
          "guidid": "678de740-b6eb-4f91-8c3a-41bddd1777af",
          "order": "17",
          "state": "Alive",
          "text": "<p>Zip / Postal Code Question</p>"
        },
        {
          "id": "2544435990",
          "name": "Phone Number",
          "type": "OpenEnd",
          "datatype": "string",
          "guidid": "72480f2a-c1f9-4676-9ea1-2c8d2545e77d",
          "order": "18",
          "state": "Alive",
          "text": "<p>Phone Number Question</p>",
          "label": "Phone Number"
        }
      ]}`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.*\/fields\/sparqsurvey\/06e10211-8580-0918-31b1-92cbbd2a3e65/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{"items":[]}`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.*\/fields\/sparqsurvey\/8{8,}\d+/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{"items":[
        {
          "id": "2544262990_2607446990",
          "guidid": "77eacd14-255b-4f5c-9b65-145c924a696a",
          "label": "sc answer 1",
          "order": "1",
          "scalevalue": "1",
          "state": "Alive",
          "type": "RegularAnswer"
        },
        {
          "id": "2544262990_2607449990",
          "guidid": "52f3c9d6-57e2-4974-b9f6-86968c719c8d",
          "label": "sc answer 2",
          "order": "2",
          "scalevalue": "2",
          "state": "Alive",
          "type": "RegularAnswer"
        }
      ]}`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.*\/fields\/sparqsurvey\/9{8,}\d+/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{"items":[
        {
          "id": "2544266990_2607450990",
          "guidid": "4d678996-fe47-4511-8e9c-f3e15cd8b249",
          "type": "RegularAnswer",
          "label": "mc green",
          "order": "1",
          "scalevalue": "1",
          "state": "Alive"
        },
        {
          "id": "2544266990_2607451990",
          "guidid": "0910c7a8-9fcc-45fa-9233-a8ed7342b777",
          "type": "RegularAnswer",
          "label": "mc yellow",
          "order": "2",
          "scalevalue": "2",
          "state": "Alive"
        },
        {
          "id": "2544266990_2607452990",
          "guidid": "d2a1b8ae-e5f4-430a-8cfa-80ed7181cfd8",
          "type": "RegularAnswer",
          "label": "mc red",
          "order": "3",
          "scalevalue": "3",
          "state": "Alive"
        }
      ]}`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.*\/fields\/sparqsurvey\/2325802990/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{"items":[
        {
          "id": "2544266990_2607451990",
          "guidid": "0910c7a8-9fcc-45fa-9233-a8ed7342b777",
          "type": "RegularAnswer",
          "label": "Ford Pinto",
          "order": "1",
          "scalevalue": "1",
          "state": "Alive"
        },
        {
          "id": "2544266990_2607452991",
          "guidid": "d2a1b8ae-e5f4-430a-8cfa-80ed7181cfd8",
          "type": "RegularAnswer",
          "label": "DeLorean",
          "order": "2",
          "scalevalue": "2",
          "state": "Alive"
        },
        {
          "id": "2544266990_2607450992",
          "guidid": "4d678996-fe47-4511-8e9c-f3e15cd8b249",
          "type": "RegularAnswer",
          "label": "Toyota Tercel",
          "order": "3",
          "scalevalue": "3",
          "state": "Alive"
        },
        {
          "id": "2544266990_2607450993",
          "guidid": "4d678996-fe47-4511-8e9c-f3e15cd8b249",
          "type": "RegularAnswer",
          "label": "Tesla Model Y",
          "order": "1",
          "scalevalue": "1",
          "state": "Alive"
        },
        {
          "id": "2544266990_2607450994",
          "guidid": "4d678996-fe47-4511-8e9c-f3e15cd8b249",
          "type": "RegularAnswer",
          "label": "Pontiac Aztec",
          "order": "4",
          "scalevalue": "4",
          "state": "Alive"
        },
        {
          "id": "2544266990_2607450995",
          "guidid": "4d678996-fe47-4511-8e9c-f3e15cd8b249",
          "type": "RegularAnswer",
          "label": "Ford Model T",
          "order": "5",
          "scalevalue": "5",
          "state": "Alive"
        },
        {
          "id": "2544266990_2607450996",
          "guidid": "4d678996-fe47-4511-8e9c-f3e15cd8b249",
          "type": "RegularAnswer",
          "label": "Citroën 2CV",
          "order": "6",
          "scalevalue": "6",
          "state": "Alive"
        }
      ]}`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.*\/fields\/sparqsurvey\/2544270990/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "items": []
      }`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.*\/fields\/sparqsurvey\/2544274990/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "items": [
          {
            "id": "2544276990",
            "datatype": "set",
            "guidid": "f300097b-9e4e-457e-915a-d0e03b0769e8",
            "label": "mcg row2",
            "name": "mcg row2",
            "order": "7",
            "state": "Alive",
            "text": "mcg row2",
            "type": "MultiChoice"
          }
        ]
      }`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.*\/fields\/sparqsurvey\/2544351990/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "items": [
          {
            "id": "2544352990",
            "datatype": "double",
            "guidid": "2bc37a10-2fae-446c-852d-ccb68c1fe9e1",
            "label": "allocation amount 1",
            "name": "allocation amount 1",
            "order": "8",
            "state": "Alive",
            "text": "allocation amount 1",
            "type": "Numeric"
          },
          {
            "id": "2544412990",
            "datatype": "double",
            "guidid": "3d37d4bf-3382-4c2f-acf3-8a8e7a1afaad",
            "label": "allocation amount 2",
            "name": "allocation amount 2",
            "order": "9",
            "state": "Alive",
            "text": "allocation amount 2",
            "type": "Numeric"
          }
        ]
      }`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.*\/fields\/sparqsurvey\/2544419990/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "items": [
          {
            "id": "2544420990",
            "datatype": "enum",
            "guidid": "6cc68d15-f70b-481a-879f-eaaa0f5c4b94",
            "label": "ro item1",
            "name": "ro item1",
            "order": "10",
            "state": "Alive",
            "text": "ro item1",
            "type": "SingleChoice"
          },
          {
            "id": "2544421990",
            "datatype": "enum",
            "guidid": "844a8136-28a5-490e-b655-298106e9ab97",
            "label": "ro item2",
            "name": "ro item2",
            "order": "11",
            "state": "Alive",
            "text": "ro item2",
            "type": "SingleChoice"
          }
        ]
      }`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.*\/fields\/sparqsurvey/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{"items":[
				{
					"id": "0e10211-8580-0918-31b1-92cbbd2a3e65",
					"label": "Survey 0"
				},
				{
					"id": "01e10211-8580-0918-31b1-92cbbd2a3e65",
					"label": "Survey 1"
				},
				{
					"id": "02e10211-8580-0918-31b1-92cbbd2a3e65",
					"label": "Survey 2"
        },
				{
					"id": "03e10211-8580-0918-31b1-92cbbd2a3e65",
					"label": "Survey 3 (NPS)"
				},
				{
					"id": "04e10211-8580-0918-31b1-92cbbd2a3e65",
					"label": "Survey 4 (Single/Multi)"
				},
				{
					"id": "05e10211-8580-0918-31b1-92cbbd2a3e65",
					"label": "Survey 5 (Grids + Nested Qs)"
        },
				{
					"id": "06e10211-8580-0918-31b1-92cbbd2a3e65",
					"label": "Survey 6 (EMPTY)"
				}
		]}`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.*\/rules\/.*\/actions/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `[
				{
						"id": "32e10211-8580-0918-31b1-92cbbd2a3e65",
						"applicationId": "b69ab272-dcdc-47bf-a1dd-3c0395768b0b",
						"ruleId": "2e707b64-0b5f-cdbe-b58e-c93a6a72e1ae",
						"type": "email",
						"ord": 0,
						"data": {
                "mergeKeys": [],
                "cc": "test1@dev.local",
                "bcc": "test2@dev.local",
								"subjectTemplate": "test 1",
								"bodyTemplateHtml": "<p>test 1</p>",
								"bodyTemplatePlainText": "test 1"
						},
						"createdAt": "2020-06-12T17:54:08.296Z",
						"updatedAt": "2020-06-12T17:54:08.296Z",
						"createdBy": "d1fa9a51-5ceb-dd79-bdfd-d8e1d7487ca8",
						"updatedBy": "d1fa9a51-5ceb-dd79-bdfd-d8e1d7487ca8"
				},
				{
						"id": "49ee21fc-8211-526a-36f4-f6fe109794e0",
						"applicationId": "b69ab272-dcdc-47bf-a1dd-3c0395768b0b",
						"ruleId": "2e707b64-0b5f-cdbe-b58e-c93a6a72e1ae",
						"type": "salesforcecasemanagement",
						"ord": 1,
						"data": {
              "SuppliedEmail": "test@dev.local",
              "Description": "The customer has been indicated as an NPS Detractor. Please follow-up",
              "Origin": "Alida",
              "ClosedDate": "2020-09-20T12:00:00.000Z",
              "IsEscalated": "false",
              "EngineeringReqNumber__c": "12931264124719824",
              "Categories": "Engineering;Support",
              "ShouldBeRemoved": "ShouldBeRemoved"
						},
						"createdAt": "2020-06-12T17:54:08.307Z",
						"updatedAt": "2020-06-12T17:54:08.307Z",
						"createdBy": "d1fa9a51-5ceb-dd79-bdfd-d8e1d7487ca8",
						"updatedBy": "d1fa9a51-5ceb-dd79-bdfd-d8e1d7487ca8"
				}
		]`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.*\/rules\/.*\/actions/,
      method: 'PUT',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `[
				{
						"id": "32e10211-8580-0918-31b1-92cbbd2a3e65",
						"ord": 1,
						"status": "updated"
				},
				{
						"id": "49ee21fc-8211-526a-36f4-f6fe109794e0",
						"ord": 2,
						"status": "updated"
				}
		]`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.*\/rules\/.*\/actions/,
      method: 'DELETE',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
				"success": [
						"96acc9c5-55a8-02c6-6d98-ac31f95e1337",
						"d27a38f5-ec3f-c601-8c61-a0a72d7f3884"
				],
				"notFound": [],
				"error": []
		}`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.+?\/rules\/2e707b64-0b5f-cdbe-b58e-c93a6a72e1ae\/?$/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "id": "2e707b64-0b5f-cdbe-b58e-c93a6a72e1ae",
        "applicationId": "b69ab272-dcdc-47bf-a1dd-3c0395768b0b",
        "name": "NPS Detractor Rule",
        "description": "",
        "status": "Draft",
        "data": {
          "groups": [
            {
              "groups": [],
              "combinator": "and",
              "conditions": [
                {
                  "values": ["6"],
                  "operator": "le",
                  "leftHandFields": [
                    { "id": "sparqsurvey", "label": "SparqSurvey" },
                    {
                      "id": "04e10211-8580-0918-31b1-92cbbd2a3e65",
                      "label": "Survey 4 (Single/Multi)",
                      "state": "Alive"
                    },
                    {
                      "id": "2544268990",
                      "name": "Net Promoter Score",
                      "type": "Nps",
                      "datatype": "double",
                      "range": "[0, 10]",
                      "text": "NPS Question",
                      "label": "Net Promoter Score",
                      "guidid": "ab0a1976-9f53-495b-bf6a-13ee1ee9df93",
                      "order": "3",
                      "state": "Alive"
                    }
                  ],
                  "rightHandFields": [{ "id": "", "label": "" }]
                }
              ]
            }
          ],
          "combinator": "and",
          "conditions": []
        },
        "createdAt": "2020-06-09T21:43:42.050Z",
        "updatedAt": "2020-06-11T21:58:02.234Z",
        "executedAt": null,
        "createdBy": "816df2ec-02e8-2dbb-a49c-fe4848af928b",
        "updatedBy": "2695b5fa-905f-c7de-afa5-1f43b7a25918"
      }`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.+?\/rules\/2e707b64-0b5f-cdbe-b58e-c93a6a72e1ae\/enable\/?$/,
      method: 'PUT',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "id": "2e707b64-0b5f-cdbe-b58e-c93a6a72e1ae",
        "applicationId": "b69ab272-dcdc-47bf-a1dd-3c0395768b0b",
        "name": "NPS Detractor Rule",
        "description": "",
        "status": "Enabled",
        "data": {
          "groups": [
            {
              "groups": [],
              "combinator": "and",
              "conditions": [
                {
                  "values": ["6"],
                  "operator": "le",
                  "leftHandFields": [
                    { "id": "sparqsurvey", "label": "SparqSurvey" },
                    {
                      "id": "04e10211-8580-0918-31b1-92cbbd2a3e65",
                      "label": "Survey 4 (Single/Multi)",
                      "state": "Alive"
                    },
                    {
                      "id": "2544268990",
                      "name": "Net Promoter Score",
                      "type": "Nps",
                      "datatype": "double",
                      "range": "[0, 10]",
                      "text": "NPS Question",
                      "label": "Net Promoter Score",
                      "guidid": "ab0a1976-9f53-495b-bf6a-13ee1ee9df93",
                      "order": "3",
                      "state": "Alive"
                    }
                  ],
                  "rightHandFields": [{ "id": "", "label": "" }]
                }
              ]
            }
          ],
          "combinator": "and",
          "conditions": []
        },
        "createdAt": "2020-06-09T21:43:42.050Z",
        "updatedAt": "2020-06-11T21:58:02.234Z",
        "executedAt": null,
        "createdBy": "816df2ec-02e8-2dbb-a49c-fe4848af928b",
        "updatedBy": "2695b5fa-905f-c7de-afa5-1f43b7a25918"
      }`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.+?\/rules\/2e707b64-0b5f-cdbe-b58e-c93a6a72e1ae\/disable\/?$/,
      method: 'PUT',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "id": "2e707b64-0b5f-cdbe-b58e-c93a6a72e1ae",
        "applicationId": "b69ab272-dcdc-47bf-a1dd-3c0395768b0b",
        "name": "NPS Detractor Rule",
        "description": "",
        "status": "Disabled",
        "data": {
          "groups": [
            {
              "groups": [],
              "combinator": "and",
              "conditions": [
                {
                  "values": ["6"],
                  "operator": "le",
                  "leftHandFields": [
                    { "id": "sparqsurvey", "label": "SparqSurvey" },
                    {
                      "id": "04e10211-8580-0918-31b1-92cbbd2a3e65",
                      "label": "Survey 4 (Single/Multi)",
                      "state": "Alive"
                    },
                    {
                      "id": "2544268990",
                      "name": "Net Promoter Score",
                      "type": "Nps",
                      "datatype": "double",
                      "range": "[0, 10]",
                      "text": "NPS Question",
                      "label": "Net Promoter Score",
                      "guidid": "ab0a1976-9f53-495b-bf6a-13ee1ee9df93",
                      "order": "3",
                      "state": "Alive"
                    }
                  ],
                  "rightHandFields": [{ "id": "", "label": "" }]
                }
              ]
            }
          ],
          "combinator": "and",
          "conditions": []
        },
        "createdAt": "2020-06-09T21:43:42.050Z",
        "updatedAt": "2020-06-11T21:58:02.234Z",
        "executedAt": null,
        "createdBy": "816df2ec-02e8-2dbb-a49c-fe4848af928b",
        "updatedBy": "2695b5fa-905f-c7de-afa5-1f43b7a25918"
      }`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.+?\/rules\/b94a6d69-db43-ad64-474e-15141b890d0c\/?$/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "id": "b94a6d69-db43-ad64-474e-15141b890d0c",
        "applicationId": "b69ab272-dcdc-47bf-a1dd-3c0395768b0b",
        "name": "POS Rule",
        "description": "",
        "status": "Enabled",
        "data": {
          "groups": [
            {
              "groups": [],
              "combinator": "and",
              "conditions": [
                {
                  "values": [
                    ""
                  ],
                  "operator": "eq",
                  "leftHandFields": [
                    {
                      "id": "sparqsurvey",
                      "label": "SparqSurvey"
                    },
                    {
                      "id": "0e10211-8580-0918-31b1-92cbbd2a3e65",
                      "label": "Survey 1"
                    },
                    {
                      "id": "8888888885",
                      "name": "Birth month",
                      "type": "SingleChoice",
                      "datatype": "enum",
                      "text": "Birth month",
                      "label": "Birth month",
                      "guidid": "05c6134a-4465-47fe-975d-d4f61923152c",
                      "order": "4",
                      "state": "Alive"
                    }
                  ],
                  "rightHandFields": [
                    {
                      "id": "2544262990_2607449990",
                      "guidid": "52f3c9d6-57e2-4974-b9f6-86968c719c8d",
                      "label": "sc answer 2",
                      "order": "2",
                      "scalevalue": "2",
                      "state": "Alive",
                      "type": "RegularAnswer"
                    }
                  ]
                }
              ]
            }
          ],
          "combinator": "and",
          "conditions": []
        },
        "createdAt": "2020-06-11T21:56:26.420Z",
        "updatedAt": "2020-06-11T21:57:55.093Z",
        "executedAt": null,
        "createdBy": "87145fd1-5e49-e495-07d4-bceb490db1fd",
        "updatedBy": "489eb435-d8c6-dd8b-dd8c-5ba591dbe45d"
      }`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.+?\/rules\/b94a6d69-db43-ad64-474e-15141b890d0c\/enable\/?$/,
      method: 'PUT',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "id": "b94a6d69-db43-ad64-474e-15141b890d0c",
        "applicationId": "b69ab272-dcdc-47bf-a1dd-3c0395768b0b",
        "name": "POS Rule",
        "description": "",
        "status": "Enabled",
        "data": {
          "groups": [
            {
              "groups": [],
              "combinator": "and",
              "conditions": [
                {
                  "values": [
                    ""
                  ],
                  "operator": "eq",
                  "leftHandFields": [
                    {
                      "id": "sparqsurvey",
                      "label": "SparqSurvey"
                    },
                    {
                      "id": "0e10211-8580-0918-31b1-92cbbd2a3e65",
                      "label": "Survey 1"
                    },
                    {
                      "id": "8888888885",
                      "name": "Birth month",
                      "type": "SingleChoice",
                      "datatype": "enum",
                      "text": "Birth month",
                      "label": "Birth month",
                      "guidid": "05c6134a-4465-47fe-975d-d4f61923152c",
                      "order": "4",
                      "state": "Alive"
                    }
                  ],
                  "rightHandFields": [
                    {
                      "id": "2544262990_2607449990",
                      "guidid": "52f3c9d6-57e2-4974-b9f6-86968c719c8d",
                      "label": "sc answer 2",
                      "order": "2",
                      "scalevalue": "2",
                      "state": "Alive",
                      "type": "RegularAnswer"
                    }
                  ]
                }
              ]
            }
          ],
          "combinator": "and",
          "conditions": []
        },
        "createdAt": "2020-06-11T21:56:26.420Z",
        "updatedAt": "2020-06-11T21:57:55.093Z",
        "executedAt": null,
        "createdBy": "87145fd1-5e49-e495-07d4-bceb490db1fd",
        "updatedBy": "489eb435-d8c6-dd8b-dd8c-5ba591dbe45d"
      }`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.+?\/rules\/b94a6d69-db43-ad64-474e-15141b890d0c\/disable\/?$/,
      method: 'PUT',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "id": "b94a6d69-db43-ad64-474e-15141b890d0c",
        "applicationId": "b69ab272-dcdc-47bf-a1dd-3c0395768b0b",
        "name": "POS Rule",
        "description": "",
              "status": "Disabled",
        "data": {
          "groups": [
            {
              "groups": [],
              "combinator": "and",
              "conditions": [
                {
                  "values": [
                    ""
                  ],
                  "operator": "eq",
                  "leftHandFields": [
                    {
                      "id": "sparqsurvey",
                      "label": "SparqSurvey"
                    },
                    {
                      "id": "0e10211-8580-0918-31b1-92cbbd2a3e65",
                      "label": "Survey 1"
                    },
                    {
                      "id": "8888888885",
                      "name": "Birth month",
                      "type": "SingleChoice",
                      "datatype": "enum",
                      "text": "Birth month",
                      "label": "Birth month",
                      "guidid": "05c6134a-4465-47fe-975d-d4f61923152c",
                      "order": "4",
                      "state": "Alive"
                    },
                  ],
                  "rightHandFields": [
                    {
                      "id": "2544262990_2607449990",
                      "guidid": "52f3c9d6-57e2-4974-b9f6-86968c719c8d",
                      "label": "sc answer 2",
                      "order": "2",
                      "scalevalue": "2",
                      "state": "Alive",
                      "type": "RegularAnswer"
                    }
                  ]
                }
              ]
            }
          ],
          "combinator": "and",
          "conditions": []
        },
        "createdAt": "2020-06-11T21:56:26.420Z",
        "updatedAt": "2020-06-11T21:57:55.093Z",
        "executedAt": null,
        "createdBy": "87145fd1-5e49-e495-07d4-bceb490db1fd",
        "updatedBy": "489eb435-d8c6-dd8b-dd8c-5ba591dbe45d"
      }`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.+?\/rules\/85565012-c97a-565e-5920-412f7476d094\/?$/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "id": "85565012-c97a-565e-5920-412f7476d094",
        "applicationId": "b69ab272-dcdc-47bf-a1dd-3c0395768b0b",
        "name": "test",
        "description": "",
        "status": "Disabled",
        "data": {},
        "createdAt": "2020-06-09T21:48:49.573Z",
        "updatedAt": "2020-06-09T22:01:02.733Z",
        "executedAt": null,
        "createdBy": "d841e089-b583-f406-24de-3d8d4eeacc50",
        "updatedBy": "ae0a2abe-7a99-d1b3-e308-e4dd1420b9d5"
      }`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.+?\/rules\/85565012-c97a-565e-5920-412f7476d094\/enable\/?$/,
      method: 'PUT',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "id": "85565012-c97a-565e-5920-412f7476d094",
        "applicationId": "b69ab272-dcdc-47bf-a1dd-3c0395768b0b",
        "name": "test",
        "description": "",
        "status": "Enabled",
        "data": {},
        "createdAt": "2020-06-09T21:48:49.573Z",
        "updatedAt": "2020-06-09T22:01:02.733Z",
        "executedAt": null,
        "createdBy": "d841e089-b583-f406-24de-3d8d4eeacc50",
        "updatedBy": "ae0a2abe-7a99-d1b3-e308-e4dd1420b9d5"
      }`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.+?\/rules\/85565012-c97a-565e-5920-412f7476d094\/disable\/?$/,
      method: 'PUT',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "id": "85565012-c97a-565e-5920-412f7476d094",
        "applicationId": "b69ab272-dcdc-47bf-a1dd-3c0395768b0b",
        "name": "test",
        "description": "",
        "status": "Disabled",
        "data": {},
        "createdAt": "2020-06-09T21:48:49.573Z",
        "updatedAt": "2020-06-09T22:01:02.733Z",
        "executedAt": null,
        "createdBy": "d841e089-b583-f406-24de-3d8d4eeacc50",
        "updatedBy": "ae0a2abe-7a99-d1b3-e308-e4dd1420b9d5"
      }`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.+?\/rules\/3d4f4ccd-7ec8-bcd9-b5d9-dd4195ff364f\/?$/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "id": "3d4f4ccd-7ec8-bcd9-b5d9-dd4195ff364f",
        "applicationId": "b69ab272-dcdc-47bf-a1dd-3c0395768b0b",
        "name": "test - copy 1",
        "description": "",
        "status": "Draft",
        "data": {},
        "createdAt": "2020-06-09T22:03:21.087Z",
        "updatedAt": "2020-06-09T22:03:21.087Z",
        "executedAt": null,
        "createdBy": "d6d3cb0b-145d-f160-31b7-950feb7da9ca",
        "updatedBy": "d6d3cb0b-145d-f160-31b7-950feb7da9ca"
      }`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.+?\/rules\/3d4f4ccd-7ec8-bcd9-b5d9-dd4195ff364f\/enable\/?$/,
      method: 'PUT',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "id": "3d4f4ccd-7ec8-bcd9-b5d9-dd4195ff364f",
        "applicationId": "b69ab272-dcdc-47bf-a1dd-3c0395768b0b",
        "name": "test - copy 1",
        "description": "",
        "status": "Enabled",
        "data": {},
        "createdAt": "2020-06-09T22:03:21.087Z",
        "updatedAt": "2020-06-09T22:03:21.087Z",
        "executedAt": null,
        "createdBy": "d6d3cb0b-145d-f160-31b7-950feb7da9ca",
        "updatedBy": "d6d3cb0b-145d-f160-31b7-950feb7da9ca"
      }`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.+?\/rules\/3d4f4ccd-7ec8-bcd9-b5d9-dd4195ff364f\/disable\/?$/,
      method: 'PUT',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "id": "3d4f4ccd-7ec8-bcd9-b5d9-dd4195ff364f",
        "applicationId": "b69ab272-dcdc-47bf-a1dd-3c0395768b0b",
        "name": "test - copy 1",
        "description": "",
        "status": "Disabled",
        "data": {},
        "createdAt": "2020-06-09T22:03:21.087Z",
        "updatedAt": "2020-06-09T22:03:21.087Z",
        "executedAt": null,
        "createdBy": "d6d3cb0b-145d-f160-31b7-950feb7da9ca",
        "updatedBy": "d6d3cb0b-145d-f160-31b7-950feb7da9ca"
      }`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.+?\/rules\/05e10211-8580-0918-31b1-92cbbd2a3e65\/?$/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "id": "05e10211-8580-0918-31b1-92cbbd2a3e65",
        "applicationId": "d2923739-6d26-47d8-9621-abf70153b43c",
        "name": "MultipleChoiceGrid",
        "description": "",
        "status": "Draft",
        "data": {
          "groups": [
            {
              "groups": [],
              "combinator": "and",
              "conditions": [
                {
                  "values": [""],
                  "operator": "eq",
                  "leftHandFields": [
                    { "id": "sparqsurvey", "label": "SparqSurvey" },
                    {
                      "id": "694448990",
                      "label": "Frequently Used Questions",
                      "state": "Alive",
                      "guidid": "8d850efc-48de-4413-9889-7a081cb30ec8"
                    },
                    {
                      "id": "2544274990",
                      "name": "Multiple Choice Grid",
                      "text": "<p>Multiple Choice Grid Question</p>",
                      "type": "MultiChoiceGrid",
                      "label": "Multiple Choice Grid",
                      "state": "Alive",
                      "guidid": "42ea5265-184f-49e3-a22f-585d38cd7465"
                    },
                    {
                      "id": "2544275990",
                      "name": "mcg row1",
                      "text": "mcg row1",
                      "type": "MultiChoice",
                      "label": "mcg row1",
                      "order": "6",
                      "state": "Alive",
                      "guidid": "05065d68-87b9-4f0a-8db6-022cc687e9cd",
                      "datatype": "set"
                    }
                  ],
                  "rightHandFields": [
                    {
                      "id": "2544275990_2607455990",
                      "type": "RegularAnswer",
                      "label": "mcg column1",
                      "order": "1",
                      "state": "Alive",
                      "guidid": "a3b9acc3-0925-4701-bb42-85730dd4dfe6",
                      "scalevalue": "1"
                    }
                  ]
                }
              ]
            }
          ],
          "combinator": "and",
          "conditions": []
        },
        "createdAt": "2020-08-24T18:22:47.608Z",
        "updatedAt": "2020-08-24T18:22:47.608Z",
        "executedAt": null,
        "createdBy": "504aad97-2b3a-4aa1-ad1e-a521010a9674",
        "updatedBy": "504aad97-2b3a-4aa1-ad1e-a521010a9674"
      }`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.+?\/rules\/05e10211-8580-0918-31b1-92cbbd2a3e65\/enable\/?$/,
      method: 'PUT',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "id": "05e10211-8580-0918-31b1-92cbbd2a3e65",
        "applicationId": "d2923739-6d26-47d8-9621-abf70153b43c",
        "name": "MultipleChoiceGrid",
        "description": "",
        "status": "Enabled",
        "data": {
          "groups": [
            {
              "groups": [],
              "combinator": "and",
              "conditions": [
                {
                  "values": [""],
                  "operator": "eq",
                  "leftHandFields": [
                    { "id": "sparqsurvey", "label": "SparqSurvey" },
                    {
                      "id": "694448990",
                      "label": "Frequently Used Questions",
                      "state": "Alive",
                      "guidid": "8d850efc-48de-4413-9889-7a081cb30ec8"
                    },
                    {
                      "id": "2544274990",
                      "name": "Multiple Choice Grid",
                      "text": "<p>Multiple Choice Grid Question</p>",
                      "type": "MultiChoiceGrid",
                      "label": "Multiple Choice Grid",
                      "state": "Alive",
                      "guidid": "42ea5265-184f-49e3-a22f-585d38cd7465"
                    },
                    {
                      "id": "2544275990",
                      "name": "mcg row1",
                      "text": "mcg row1",
                      "type": "MultiChoice",
                      "label": "mcg row1",
                      "order": "6",
                      "state": "Alive",
                      "guidid": "05065d68-87b9-4f0a-8db6-022cc687e9cd",
                      "datatype": "set"
                    }
                  ],
                  "rightHandFields": [
                    {
                      "id": "2544275990_2607455990",
                      "type": "RegularAnswer",
                      "label": "mcg column1",
                      "order": "1",
                      "state": "Alive",
                      "guidid": "a3b9acc3-0925-4701-bb42-85730dd4dfe6",
                      "scalevalue": "1"
                    }
                  ]
                }
              ]
            }
          ],
          "combinator": "and",
          "conditions": []
        },
        "createdAt": "2020-08-24T18:22:47.608Z",
        "updatedAt": "2020-08-24T18:22:47.608Z",
        "executedAt": null,
        "createdBy": "504aad97-2b3a-4aa1-ad1e-a521010a9674",
        "updatedBy": "504aad97-2b3a-4aa1-ad1e-a521010a9674"
      }
      `,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.+?\/rules\/05e10211-8580-0918-31b1-92cbbd2a3e65\/disable\/?$/,
      method: 'PUT',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "id": "05e10211-8580-0918-31b1-92cbbd2a3e65",
        "applicationId": "d2923739-6d26-47d8-9621-abf70153b43c",
        "name": "MultipleChoiceGrid",
        "description": "",
        "status": "Disabled",
        "data": {
          "groups": [
            {
              "groups": [],
              "combinator": "and",
              "conditions": [
                {
                  "values": [""],
                  "operator": "eq",
                  "leftHandFields": [
                    { "id": "sparqsurvey", "label": "SparqSurvey" },
                    {
                      "id": "694448990",
                      "label": "Frequently Used Questions",
                      "state": "Alive",
                      "guidid": "8d850efc-48de-4413-9889-7a081cb30ec8"
                    },
                    {
                      "id": "2544274990",
                      "name": "Multiple Choice Grid",
                      "text": "<p>Multiple Choice Grid Question</p>",
                      "type": "MultiChoiceGrid",
                      "label": "Multiple Choice Grid",
                      "state": "Alive",
                      "guidid": "42ea5265-184f-49e3-a22f-585d38cd7465"
                    },
                    {
                      "id": "2544275990",
                      "name": "mcg row1",
                      "text": "mcg row1",
                      "type": "MultiChoice",
                      "label": "mcg row1",
                      "order": "6",
                      "state": "Alive",
                      "guidid": "05065d68-87b9-4f0a-8db6-022cc687e9cd",
                      "datatype": "set"
                    }
                  ],
                  "rightHandFields": [
                    {
                      "id": "2544275990_2607455990",
                      "type": "RegularAnswer",
                      "label": "mcg column1",
                      "order": "1",
                      "state": "Alive",
                      "guidid": "a3b9acc3-0925-4701-bb42-85730dd4dfe6",
                      "scalevalue": "1"
                    }
                  ]
                }
              ]
            }
          ],
          "combinator": "and",
          "conditions": []
        },
        "createdAt": "2020-08-24T18:22:47.608Z",
        "updatedAt": "2020-08-24T18:22:47.608Z",
        "executedAt": null,
        "createdBy": "504aad97-2b3a-4aa1-ad1e-a521010a9674",
        "updatedBy": "504aad97-2b3a-4aa1-ad1e-a521010a9674"
      }`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.+?\/rules\/([^\/]+?)\/?$/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "id": "<% url[1] %>",
        "applicationId": "b69ab272-dcdc-47bf-a1dd-3c0395768b0b",
        "name": "Default Test Rule",
        "description": "",
        "status": "Draft",
        "data": {},
        "createdAt": "2020-06-09T21:43:42.050Z",
        "updatedAt": "2020-06-11T21:58:02.234Z",
        "executedAt": null,
        "createdBy": "816df2ec-02e8-2dbb-a49c-fe4848af928b",
        "updatedBy": "2695b5fa-905f-c7de-afa5-1f43b7a25918"
      }`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.+?\/rules\/?$/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `[
        {
          "id": "2e707b64-0b5f-cdbe-b58e-c93a6a72e1ae",
          "applicationId": "b69ab272-dcdc-47bf-a1dd-3c0395768b0b",
          "name": "NPS Detractor Rule",
          "description": "",
          "status": "Draft",
          "data": {},
          "createdAt": "2020-06-09T21:43:42.050Z",
          "updatedAt": "2020-06-11T21:58:02.234Z",
          "executedAt": null,
          "createdBy": "816df2ec-02e8-2dbb-a49c-fe4848af928b",
          "updatedBy": "2695b5fa-905f-c7de-afa5-1f43b7a25918"
        },
        {
          "id": "b94a6d69-db43-ad64-474e-15141b890d0c",
          "applicationId": "b69ab272-dcdc-47bf-a1dd-3c0395768b0b",
          "name": "POS Rule",
          "description": "",
          "status": "Enabled",
          "data": {},
          "createdAt": "2020-06-11T21:56:26.420Z",
          "updatedAt": "2020-06-11T21:57:55.093Z",
          "executedAt": null,
          "createdBy": "87145fd1-5e49-e495-07d4-bceb490db1fd",
          "updatedBy": "489eb435-d8c6-dd8b-dd8c-5ba591dbe45d"
        },
        {
          "id": "85565012-c97a-565e-5920-412f7476d094",
          "applicationId": "b69ab272-dcdc-47bf-a1dd-3c0395768b0b",
          "name": "test",
          "description": "",
          "status": "Disabled",
          "data": {},
          "createdAt": "2020-06-09T21:48:49.573Z",
          "updatedAt": "2020-06-09T22:01:02.733Z",
          "executedAt": null,
          "createdBy": "d841e089-b583-f406-24de-3d8d4eeacc50",
          "updatedBy": "ae0a2abe-7a99-d1b3-e308-e4dd1420b9d5"
        },
        {
          "id": "3d4f4ccd-7ec8-bcd9-b5d9-dd4195ff364f",
          "applicationId": "b69ab272-dcdc-47bf-a1dd-3c0395768b0b",
          "name": "test - copy 1",
          "description": "",
          "status": "Draft",
          "data": {},
          "createdAt": "2020-06-09T22:03:21.087Z",
          "updatedAt": "2020-06-09T22:03:21.087Z",
          "executedAt": null,
          "createdBy": "d6d3cb0b-145d-f160-31b7-950feb7da9ca",
          "updatedBy": "d6d3cb0b-145d-f160-31b7-950feb7da9ca"
        }
      ]`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.+?\/rules\/?$/,
      method: 'PUT',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
				"id": "2e707b64-0b5f-cdbe-b58e-c93a6a72e1ae",
				"applicationId": "b69ab272-dcdc-47bf-a1dd-3c0395768b0b",
				"name": "NPS Detractor Rule",
				"description": "",
				"status": "Draft",
				"data": {},
				"createdAt": "2020-06-09T21:43:42.050Z",
				"updatedAt": "2020-06-11T21:58:02.234Z",
				"executedAt": null,
				"createdBy": "816df2ec-02e8-2dbb-a49c-fe4848af928b",
				"updatedBy": "2695b5fa-905f-c7de-afa5-1f43b7a25918"
  		}`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.*\/actiontypes\/salesforcecasemanagement\/?$/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "fields": [
          {
            "id": "SuppliedEmail",
            "label": "Email",
            "dataType": "string",
            "required": true,
            "editable": true,
            "active": true,
            "static": false
          },
          {
            "id": "Description",
            "label": "Description",
            "dataType": "string",
            "formatType": "longtext",
            "required": true,
            "editable": true,
            "active": true,
            "static": false
          },
          {
            "id": "Origin",
            "label": "Origin",
            "dataType": "enum",
            "required": true,
            "editable": true,
            "active": true,
            "static": false,
            "values": [
              {
                "id": "Alida",
                "label": "Alida"
              },
              {
                "id": "Other",
                "label": "Other"
              }
            ]
          },
          {
            "id": "Categories",
            "label": "Categories",
            "dataType": "set",
            "required": true,
            "editable": true,
            "active": true,
            "static": false,
            "values": [
              {
                "id": "Engineering",
                "label": "Engineering"
              },
              {
                "id": "Support",
                "label": "Support"
              },
              {
                "id": "Business",
                "label": "Business"
              },
              {
                "id": "Internal",
                "label": "Internal"
              }
            ]
          },
          {
            "id": "ClosedDate",
            "label": "Closed Date",
            "dataType": "datetime",
            "required": true,
            "editable": true,
            "active": true,
            "static": false
          },
          {
            "id": "IsEscalated",
            "label": "Escalated",
            "dataType": "boolean",
            "required": true,
            "editable": true,
            "active": true,
            "static": false
          },
          {
            "id": "EngineeringReqNumber__c",
            "label": "Engineering Req Number",
            "dataType": "double",
            "required": true,
            "editable": true,
            "active": true,
            "static": false
          },
          {
            "id": "Subject",
            "label": "Subject",
            "dataType": "string",
            "required": true,
            "editable": true,
            "active": true,
            "static": true,
            "value": "Alida Priority Follow-up Case"
          },
          {
            "id": "Comments",
            "label": "Comments",
            "dataType": "string",
            "formatType": "longtext",
            "required": true,
            "editable": true,
            "active": true,
            "static": true,
            "value": "This is a system generated ticket from Alida"
          },
          {
            "id": "SLAViolation__c",
            "label": "SLA Violation",
            "dataType": "enum",
            "required": true,
            "editable": true,
            "active": true,
            "static": true,
            "value": "Yes",
            "values": [
              {
                "id": "No",
                "label": "No"
              },
              {
                "id": "Yes",
                "label": "Yes"
              }
            ]
          },
          {
            "id": "Tags",
            "label": "Tags",
            "dataType": "set",
            "required": true,
            "editable": true,
            "active": true,
            "static": true,
            "value": "Important;System",
            "values": [
              {
                "id": "Important",
                "label": "Important"
              },
              {
                "id": "Priority",
                "label": "Priority"
              },
              {
                "id": "System",
                "label": "System"
              },
              {
                "id": "Internal",
                "label": "Internal"
              }
            ]
          },
          {
            "id": "SetupDate",
            "label": "Setup Date",
            "dataType": "datetime",
            "required": true,
            "editable": true,
            "active": true,
            "static": true,
            "value": "2020-09-18T12:00:00.000Z"
          },
          {
            "id": "IsPriority",
            "label": "Priority",
            "dataType": "boolean",
            "required": true,
            "editable": true,
            "active": true,
            "static": true,
            "value": true
          },
          {
            "id": "AccountId",
            "label": "Account Id",
            "dataType": "double",
            "required": true,
            "editable": true,
            "active": true,
            "static": true,
            "value": "7429136543212385930"
          }
        ]
      }`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.*\/actiontypes\/?$/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `["email","salesforcecasemanagement"]`,
    },
  },
  {
    request: {
      url: /\/api\/v1\/applications\/.*\/providers\/salesforcecasemanagement\/schemas\/case\/settings\/?$/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "items": [
          {
            "id": "TO_BE_REMOVED",
            "settings": {
              "active": "true",
              "static": "true",
              "value": "Theres no field mapping this should be removed"
            }
          },
          {
            "id": "SuppliedEmail",
            "settings": {
              "active": "true",
              "static": "true",
              "value": "test@dev.local"
            }
          },
          {
            "id": "Origin",
            "settings": {
              "active": "true",
              "static": "true",
              "value": "Alida"
            }
          },
          {
            "id": "Categories",
            "settings": {
              "active": "true",
              "static": "true",
              "value": "Engineering;Support"
            }
          },
          {
            "id": "ClosedDate",
            "settings": {
              "active": "true",
              "static": "true",
              "value": "2020-01-01T00:00:00.000Z"
            },
            "lastUpdateDate": "2020-10-14T22:18:18"
          },
          {
            "id": "IsEscalated",
            "settings": {
              "active": "true",
              "static": "true",
              "value": "true"
            }
          },
          {
            "id": "EngineeringReqNumber__c",
            "settings": {
              "active": "true",
              "static": "true",
              "value": "14759215"
            },
            "lastUpdateDate": "2019-11-10T13:22:01"
          }
        ]
      }
      `,
    },
  },
  {
    request: {
      url: /\/api\/v1\/applications\/.*\/providers\/salesforcecasemanagement\/schemas\/case\/?$/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "fields": [
          {
            "id": "NOT_EDITABLE_SHOULD_NOT_SHOW",
            "label": "This field is not editable!!!!",
            "dataType": "datetime",
            "required": false,
            "editable": false
          },
          {
            "id": "SuppliedEmail",
            "label": "Supplied Email",
            "dataType": "string",
            "required": false,
            "editable": true
          },
          {
            "id": "Origin",
            "label": "Origin",
            "dataType": "enum",
            "required": false,
            "editable": true,
            "values": [
              {
                "id": "Alida",
                "label": "Alida"
              },
              {
                "id": "Other",
                "label": "Other"
              }
            ]
          },
          {
            "id": "Categories",
            "label": "Categories",
            "dataType": "set",
            "required": false,
            "editable": true,
            "values": [
              {
                "id": "Engineering",
                "label": "Engineering"
              },
              {
                "id": "Support",
                "label": "Support"
              },
              {
                "id": "Business",
                "label": "Business"
              },
              {
                "id": "Internal",
                "label": "Internal"
              }
            ]
          },
          {
            "id": "ClosedDate",
            "label": "Closed Date",
            "dataType": "datetime",
            "required": false,
            "editable": true
          },
          {
            "id": "IsEscalated",
            "label": "Escalated",
            "dataType": "boolean",
            "required": false,
            "editable": true
          },
          {
            "id": "EngineeringReqNumber__c",
            "label": "Engineering Req Number",
            "dataType": "double",
            "required": false,
            "editable": true
          },
          {
            "id": "Subject",
            "label": "Subject",
            "dataType": "string",
            "required": true,
            "editable": true
          },
          {
            "id": "Comments",
            "label": "Comments",
            "dataType": "string",
            "formatType": "longtext",
            "required": true,
            "editable": true
          },
          {
            "id": "SLAViolation__c",
            "label": "SLA Violation",
            "dataType": "enum",
            "required": true,
            "editable": true,
            "values": [
              {
                "id": "No",
                "label": "No"
              },
              {
                "id": "Yes",
                "label": "Yes"
              }
            ]
          },
          {
            "id": "Tags",
            "label": "Tags",
            "dataType": "set",
            "required": true,
            "editable": true,
            "values": [
              {
                "id": "Important",
                "label": "Important"
              },
              {
                "id": "Priority",
                "label": "Priority"
              },
              {
                "id": "System",
                "label": "System"
              },
              {
                "id": "Internal",
                "label": "Internal"
              }
            ]
          },
          {
            "id": "SetupDate",
            "label": "Setup Date",
            "dataType": "datetime",
            "required": true,
            "editable": true
          },
          {
            "id": "IsPriority",
            "label": "Priority",
            "dataType": "boolean",
            "required": true,
            "editable": true
          },
          {
            "id": "AccountId",
            "label": "Account Id",
            "dataType": "double",
            "required": true,
            "editable": true
          }
        ]
      }
      `,
    },
  },
  {
    request: {
      url: /\/api\/v1\/applications\/.*\/providers\/salesforcecasemanagement\/schemas\/case\/settings\/?$/,
      method: 'PUT',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{}`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.+?\/cases\/?$/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `[
        {
          "id": 7569124,
          "createdAt": "2020-09-20T12:00:00.000Z",
          "values": [
            { 
              "case_attribute_id": 4,
              "case_attribute_name": "subject",
              "case_attribute_value": "Client Disatisfaction Survey",
              "case_attribute_value_label": "Client Disatisfaction Survey"
            },
            { 
              "case_attribute_id": 1,
              "case_attribute_name": "priority",
              "case_attribute_value_id": 4,
              "case_attribute_value": "critical",
              "case_attribute_value_label": "Critical"
            },
            { 
              "case_attribute_id": 2,
              "case_attribute_name": "status",
              "case_attribute_value_id": 7,
              "case_attribute_value": "escalating",
              "case_attribute_value_label": "Escalating"
            },
            { 
              "case_attribute_id": 5,
              "case_attribute_name": "due_date",
              "case_attribute_value": "2021-01-05T12:00:00.000Z",
              "case_attribute_value_label": "2021-01-05T12:00:00.000Z"
            },
            { 
              "case_attribute_id": 6,
              "case_attribute_name": "assigned_to_agent",
              "case_attribute_value_label": "Anika Westervelt",
              "case_attribute_value": "6373adbe-db3d-4cb3-99a7-a90d0189e07f"
            }
          ]
        },
        {
          "id": 7569125,
          "createdAt": "2020-09-25T16:00:00.000Z",
          "values": [
            { 
              "case_attribute_id": 4,
              "case_attribute_name": "subject",
              "case_attribute_value": "Happy Survey",
              "case_attribute_value_label": "Happy Survey"
            },
            { 
              "case_attribute_id": 1,
              "case_attribute_name": "priority",
              "case_attribute_value_id": 1,
              "case_attribute_value": "low",
              "case_attribute_value_label": "Low"
            },
            { 
              "case_attribute_id": 2,
              "case_attribute_name": "status",
              "case_attribute_value_id": 6,
              "case_attribute_value": "in-progress",
              "case_attribute_value_label": "In-Progress"
            },
            { 
              "case_attribute_id": 5,
              "case_attribute_name": "due_date",
              "case_attribute_value": "2021-01-06T11:00:00.000Z",
              "case_attribute_value_label": "2021-01-06T11:00:00.000Z"
            },
            { 
              "case_attribute_id": 6,
              "case_attribute_name": "assigned_to_agent",
              "case_attribute_value_label": "Walter Dion",
              "case_attribute_value": "4373adbe-db3d-4cb3-99a7-a90d0189e07f"
            }
          ]
        },
        {
          "id": 7569126,
          "createdAt": "2018-09-20T12:00:00.000Z",
          "values": [
            { 
              "case_attribute_id": 4,
              "case_attribute_name": "subject",
              "case_attribute_value": "Sad Survey",
              "case_attribute_value_label": "Sad Survey"
            },
            { 
              "case_attribute_id": 1,
              "case_attribute_name": "priority",
              "case_attribute_value_id": 3,
              "case_attribute_value": "high",
              "case_attribute_value_label": "High"
            },
            { 
              "case_attribute_id": 2,
              "case_attribute_name": "status",
              "case_attribute_value_id": 8,
              "case_attribute_value": "closed",
              "case_attribute_value_label": "Closed"
            },
            { 
              "case_attribute_id": 5,
              "case_attribute_name": "due_date",
              "case_attribute_value": "2019-02-09T08:00:00.000Z",
              "case_attribute_value_label": "2019-02-09T08:00:00.000Z"
            },
            { 
              "case_attribute_id": 6,
              "case_attribute_name": "assigned_to_agent",
              "case_attribute_value_label": "Brian Waiters",
              "case_attribute_value": "4373adbe-db3d-4cb3-99a7-a90d0189e07f"
            }
          ]
        },
        {
          "id": 7569127,
          "createdAt": "2019-10-20T23:00:00.000Z",
          "values": [
            { 
              "case_attribute_id": 4,
              "case_attribute_name": "subject",
              "case_attribute_value": "Candid Survey",
              "case_attribute_value_label": "Candid Survey"
            },
            { 
              "case_attribute_id": 1,
              "case_attribute_name": "priority",
              "case_attribute_value_id": 2,
              "case_attribute_value": "medium",
              "case_attribute_value_label": "Medium"
            },
            { 
              "case_attribute_id": 2,
              "case_attribute_name": "status",
              "case_attribute_value_id": 5,
              "case_attribute_value": "new",
              "case_attribute_value_label": "New"
            },
            { 
              "case_attribute_id": 5,
              "case_attribute_name": "due_date",
              "case_attribute_value": "2020-01-05T18:11:59.000Z",
              "case_attribute_value_label": "2020-01-05T18:11:59.000Z"
            },
            { 
              "case_attribute_id": 6,
              "case_attribute_name": "assigned_to_agent",
              "case_attribute_value_label": "Daniel James",
              "case_attribute_value": "4373adbe-db3d-4cb3-99a7-a90d0189e07f"
            }
          ]
        },
        {
          "id": 7569128,
          "createdAt": "2017-09-20T12:12:12.000Z",
          "values": [
            { 
              "case_attribute_id": 4,
              "case_attribute_name": "subject",
              "case_attribute_value": "Response Survey",
              "case_attribute_value_label": "Response Survey"
            },
            { 
              "case_attribute_id": 1,
              "case_attribute_name": "priority",
              "case_attribute_value_id": 4,
              "case_attribute_value": "critical",
              "case_attribute_value_label": "Critical"
            },
            { 
              "case_attribute_id": 2,
              "case_attribute_name": "status",
              "case_attribute_value_id": 5,
              "case_attribute_value": "new",
              "case_attribute_value_label": "New"
            },
            { 
              "case_attribute_id": 5,
              "case_attribute_name": "due_date",
              "case_attribute_value": "2021-12-03T12:23:23.000Z",
              "case_attribute_value_label": "2021-12-03T12:23:23.000Z"
            },
            { 
              "case_attribute_id": 6,
              "case_attribute_name": "assigned_to_agent",
              "case_attribute_value_label": "Mohammad Li",
              "case_attribute_value": "4373adbe-db3d-4cb3-99a7-a90d0189e07f"
            }
          ]
        },
        {
          "id": 7569129,
          "createdAt": "2020-09-25T11:11:11.000Z",
          "values": [
            { 
              "case_attribute_id": 4,
              "case_attribute_name": "subject",
              "case_attribute_value": "Your Survey",
              "case_attribute_value_label": "Your Survey"
            },
            { 
              "case_attribute_id": 1,
              "case_attribute_name": "priority",
              "case_attribute_value_id": 3,
              "case_attribute_value": "high",
              "case_attribute_value_label": "High"
            },
            { 
              "case_attribute_id": 2,
              "case_attribute_name": "status",
              "case_attribute_value_id": 8,
              "case_attribute_value": "closed",
              "case_attribute_value_label": "Closed"
            },
            { 
              "case_attribute_id": 6,
              "case_attribute_name": "assigned_to_agent",
              "case_attribute_value_label": "Peter Smith",
              "case_attribute_value": "4373adbe-db3d-4cb3-99a7-a90d0189e07f"
            }
          ]
        },
        {
          "id": 7569140,
          "createdAt": "2020-09-20T12:00:00.000Z",
          "values": [
            { 
              "case_attribute_id": 4,
              "case_attribute_name": "subject",
              "case_attribute_value": "Thank you Survey",
              "case_attribute_value_label": "Thank you Survey"
            },
            { 
              "case_attribute_id": 1,
              "case_attribute_name": "priority",
              "case_attribute_value_id": 1,
              "case_attribute_value": "low",
              "case_attribute_value_label": "Low"
            },
            { 
              "case_attribute_id": 2,
              "case_attribute_name": "status",
              "case_attribute_value_id": 5,
              "case_attribute_value": "new",
              "case_attribute_value_label": "New"
            },
            { 
              "case_attribute_id": 5,
              "case_attribute_name": "due_date",
              "case_attribute_value": "2021-03-25T12:03:30.000Z",
              "case_attribute_value_label": "2021-03-25T12:03:30.000Z"
            },
            { 
              "case_attribute_id": 6,
              "case_attribute_name": "assigned_to_agent",
              "case_attribute_value_label": "Anika Westervelt",
              "case_attribute_value": "4373adbe-db3d-4cb3-99a7-a90d0189e07f"
            }
          ]
        },
        {
          "id": 7569130,
          "createdAt": "2020-12-25T12:00:00.000Z",
          "values": [
            { 
              "case_attribute_id": 4,
              "case_attribute_name": "subject",
              "case_attribute_value": "9th Anniversery Survey",
              "case_attribute_value_label": "9th Anniversery Survey"
            },
            { 
              "case_attribute_id": 2,
              "case_attribute_name": "priority",
              "case_attribute_value_id": 4,
              "case_attribute_value": "critical",
              "case_attribute_value_label": "Critical"
            },
            { 
              "case_attribute_id": 3,
              "case_attribute_name": "status",
              "case_attribute_value_id": 7,
              "case_attribute_value": "escalating",
              "case_attribute_value_label": "Escalating"
            },
            { 
              "case_attribute_id": 5,
              "case_attribute_name": "due_date",
              "case_attribute_value": "2021-01-11T12:00:00.000Z",
              "case_attribute_value_label": "2021-01-11T12:00:00.000Z"
            },
            { 
              "case_attribute_id": 6,
              "case_attribute_name": "assigned_to_agent",
              "case_attribute_value_label": "Amanda Harris",
              "case_attribute_value": "4373adbe-db3d-4cb3-99a7-a90d0189e07f"
            }
          ]
        },
        {
          "id": 7569131,
          "createdAt": "2020-09-05T12:00:00.000Z",
          "values": [
            { 
              "case_attribute_id": 4,
              "case_attribute_name": "subject",
              "case_attribute_value": "Angry Survey",
              "case_attribute_value_label": "Angry Survey"
            },
            { 
              "case_attribute_id": 1,
              "case_attribute_name": "priority",
              "case_attribute_value_id": 4,
              "case_attribute_value": "critical",
              "case_attribute_value_label": "Critical"
            },
            { 
              "case_attribute_id": 2,
              "case_attribute_name": "status",
              "case_attribute_value_id": 8,
              "case_attribute_value": "closed",
              "case_attribute_value_label": "Closed"
            },
            { 
              "case_attribute_id": 5,
              "case_attribute_name": "due_date",
              "case_attribute_value": "2021-01-09T12:00:00.000Z",
              "case_attribute_value_label": "2021-01-09T12:00:00.000Z"
            },
            { 
              "case_attribute_id": 6,
              "case_attribute_name": "assigned_to_agent",
              "case_attribute_value_label": "Deleted User",
              "case_attribute_value": "4373adbe-db3d-4cb3-99a7-a90d0189e07f"
            }
          ]
        },
        {
          "id": 7569132,
          "createdAt": "2020-09-20T12:00:00.000Z",
          "values": [
            { 
              "case_attribute_id": 4,
              "case_attribute_name": "subject",
              "case_attribute_value": "aldsjflasjdlfajkldfaskdfajlsfjksldjfsldjflkaljfaklsdjflajdf;alkjdfalksfl;sdfjal;skdjfaldjfa;ldjalsfjalsdjkfasf",
              "case_attribute_value_label": "aldsjflasjdlfajkldfaskdfajlsfjksldjfsldjflkaljfaklsdjflajdf;alkjdfalksfl;sdfjal;skdjfaldjfa;ldjalsfjalsdjkfasf"
            },
            { 
              "case_attribute_id": 1,
              "case_attribute_name": "priority",
              "case_attribute_value_id": 1,
              "case_attribute_value": "low",
              "case_attribute_value_label": "Low"
            },
            { 
              "case_attribute_id": 3,
              "case_attribute_name": "status",
              "case_attribute_value_id": 5,
              "case_attribute_value": "new",
              "case_attribute_value_label": "New"
            },
            { 
              "case_attribute_id": 5,
              "case_attribute_name": "due_date",
              "case_attribute_value": "2021-01-05T12:00:00.000Z",
              "case_attribute_value_label": "2021-01-05T12:00:00.000Z"
            },
            { 
              "case_attribute_id": 6,
              "case_attribute_name": "assigned_to_agent",
              "case_attribute_value_label": "Danny Chris",
              "case_attribute_value": "6373adbe-db3d-4cb3-99a7-a90d0189e07f"
            }
          ]
        }
      ]`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.+?\/attributes\/?$/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
        "fields": [
            {
                "case_attribute_id": 1,
                "case_attribute_name": "priority",
                "case_attribute_label": "Priority",
                "data_type": "enum",
                "format_type": "",
                "group": "Case Details",
                "order": "20",
                "constraints": "1",
                "editable": "true",
                "values": [
                    {
                        "case_attribute_value_id": 1,
                        "case_attribute_value": "low",
                        "case_attribute_value_label": "Low"
                    },
                    {
                        "case_attribute_value_id": 2,
                        "case_attribute_value": "medium",
                        "case_attribute_value_label": "Medium"
                    },
                    {
                        "case_attribute_value_id": 3,
                        "case_attribute_value": "high",
                        "case_attribute_value_label": "High"
                    },
                    {
                        "case_attribute_value_id": 4,
                        "case_attribute_value": "critical",
                        "case_attribute_value_label": "Critical"
                    }
                ]
            },
            {
                "case_attribute_id": 2,
                "case_attribute_name": "status",
                "case_attribute_label": "Status",
                "data_type": "enum",
                "format_type": "",
                "group": "Case Details",
                "order": "40",
                "constraints": "1",
                "editable": "true",
                "values": [
                    {
                        "case_attribute_value_id": 5,
                        "case_attribute_value": "new",
                        "case_attribute_value_label": "New"
                    },
                    {
                        "case_attribute_value_id": 6,
                        "case_attribute_value": "in_progress",
                        "case_attribute_value_label": "In-Progress"
                    },
                    {
                        "case_attribute_value_id": 7,
                        "case_attribute_value": "escalating",
                        "case_attribute_value_label": "Escalating"
                    },
                    {
                        "case_attribute_value_id": 8,
                        "case_attribute_value": "closed",
                        "case_attribute_value_label": "Closed"
                    }
                ]
            },
            {
                "case_attribute_id": 3,
                "case_attribute_name": "type",
                "case_attribute_label": "Type",
                "data_type": "enum",
                "format_type": "",
                "group": "Case Details",
                "order": "30",
                "constraints": "1",
                "editable": "true",
                "values": [
                    {
                        "case_attribute_value_id": 9,
                        "case_attribute_value": "how_to",
                        "case_attribute_value_label": "How To"
                    },
                    {
                        "case_attribute_value_id": 10,
                        "case_attribute_value": "technical_issue",
                        "case_attribute_value_label": "Technical Issue"
                    },
                    {
                        "case_attribute_value_id": 11,
                        "case_attribute_value": "product_issue",
                        "case_attribute_value_label": "Product Issue"
                    },
                    {
                        "case_attribute_value_id": 12,
                        "case_attribute_value": "documentation",
                        "case_attribute_value_label": "Documentation"
                    },
                    {
                        "case_attribute_value_id": 13,
                        "case_attribute_value": "feature_request",
                        "case_attribute_value_label": "Feature Request"
                    },
                    {
                        "case_attribute_value_id": 14,
                        "case_attribute_value": "other",
                        "case_attribute_value_label": "Other"
                    }
                ]
            },
            {
                "case_attribute_id": 4,
                "case_attribute_name": "subject",
                "case_attribute_label": "Subject",
                "data_type": "string",
                "format_type": "",
                "group": "Case Details",
                "order": "10",
                "constraints": "1",
                "editable": "true",
                "values": []
            },
            {
                "case_attribute_id": 5,
                "case_attribute_name": "due_date",
                "case_attribute_label": "Due Date",
                "data_type": "datetime",
                "format_type": "",
                "group": "Case Details",
                "order": "50",
                "constraints": "1",
                "editable": "true",
                "values": []
            },
            {   "case_attribute_id":6,
                "case_attribute_name":"assigned_to_agent",
                "case_attribute_label":"Assigned-To-Agent",
                "data_type":"string",
                "format_type":"3",
                "group":"Case Details",
                "order":"60",
                "constraints":"1",
                "editable":"true",
                "values":
                      [
                        {
                          "case_attribute_value_id":"504aad97-2b3a-4aa1-ad1e-a521010a9674",
                          "case_attribute_value":"504aad97-2b3a-4aa1-ad1e-a521010a9674",
                          "case_attribute_value_label":"avneet.sunner@dev.local"
                        },
                        {
                          "case_attribute_value_id":"ded94323-e0f4-469a-b065-a7d30046cfea",
                          "case_attribute_value":"ded94323-e0f4-469a-b065-a7d30046cfea",
                          "case_attribute_value_label":"Avneet.Sunner@visioncritical.com"
                        },
                        {
                          "case_attribute_value_id":"6373adbe-db3d-4cb3-99a7-a90d0189e07f",
                          "case_attribute_value":"6373adbe-db3d-4cb3-99a7-a90d0189e07f",
                          "case_attribute_value_label":"Community Admin"
                        },{"case_attribute_value_id":"6e6c39db-c59a-4372-a2e0-ac85014096fc","case_attribute_value":"6e6c39db-c59a-4372-a2e0-ac85014096fc","case_attribute_value_label":"evan.fleming-admin@dev.local"},{"case_attribute_value_id":"b2da634b-f83c-482b-8aa5-ac85013e002c","case_attribute_value":"b2da634b-f83c-482b-8aa5-ac85013e002c","case_attribute_value_label":"evan.fleming-agent@dev.local"},{"case_attribute_value_id":"740b684b-38d0-47c5-b645-aab9014a2ae3","case_attribute_value":"740b684b-38d0-47c5-b645-aab9014a2ae3","case_attribute_value_label":"evan.fleming-author@dev.local"},{"case_attribute_value_id":"3957ae4d-0b17-4ce5-9cba-ac5d016f0f04","case_attribute_value":"3957ae4d-0b17-4ce5-9cba-ac5d016f0f04","case_attribute_value_label":"evan.fleming-power@dev.local"},{"case_attribute_value_id":"22806e27-5a81-44a5-99cd-ac8f017e752a","case_attribute_value":"22806e27-5a81-44a5-99cd-ac8f017e752a","case_attribute_value_label":"evan test"},{"case_attribute_value_id":"45d48904-19b0-4de9-93c8-ac4f01675d84","case_attribute_value":"45d48904-19b0-4de9-93c8-ac4f01675d84","case_attribute_value_label":"Jorge Castillo"},{"case_attribute_value_id":"8218600f-6ab4-4ebb-9755-ab040158d8d8","case_attribute_value":"8218600f-6ab4-4ebb-9755-ab040158d8d8","case_attribute_value_label":"Jorge Castillo"},{"case_attribute_value_id":"f5505dd7-c80f-4d33-9cf1-a91f0174dea0","case_attribute_value":"f5505dd7-c80f-4d33-9cf1-a91f0174dea0","case_attribute_value_label":"Josephine"},{"case_attribute_value_id":"588e70d5-63f1-4408-9044-ac3e011f16c0","case_attribute_value":"588e70d5-63f1-4408-9044-ac3e011f16c0","case_attribute_value_label":"Julia.Romano@visioncritical.com"},{"case_attribute_value_id":"2cfbd8da-68a5-45d4-8152-a7630160d5d3","case_attribute_value":"2cfbd8da-68a5-45d4-8152-a7630160d5d3","case_attribute_value_label":"leah.maestri@visioncritical.com"},{"case_attribute_value_id":"d4fd764a-f284-4483-a9e3-aba600257215","case_attribute_value":"d4fd764a-f284-4483-a9e3-aba600257215","case_attribute_value_label":"mobeen.ladak@visioncritical.com"},{"case_attribute_value_id":"b7b9f3de-b08e-4369-9923-abdf01268be9","case_attribute_value":"b7b9f3de-b08e-4369-9923-abdf01268be9","case_attribute_value_label":"nick.bouton@visioncritical.com"},{"case_attribute_value_id":"5c99d388-eadd-41da-b992-a85c013e31d9","case_attribute_value":"5c99d388-eadd-41da-b992-a85c013e31d9","case_attribute_value_label":"scott.velez"},{"case_attribute_value_id":"692b98a1-968d-454d-bd6d-ac870169c4d6","case_attribute_value":"692b98a1-968d-454d-bd6d-ac870169c4d6","case_attribute_value_label":"scott.velez-author@dev.local"},{"case_attribute_value_id":"1377c0a5-031d-4537-8103-a9200103a4ba","case_attribute_value":"1377c0a5-031d-4537-8103-a9200103a4ba","case_attribute_value_label":"william.yip"},{"case_attribute_value_id":"df831ede-4323-4c07-b452-a4f2012ae049","case_attribute_value":"df831ede-4323-4c07-b452-a4f2012ae049","case_attribute_value_label":"yasin.malli@visioncritical.com"},{"case_attribute_value_id":"bdc75493-5e8d-40b1-a1b0-a66c0113d179","case_attribute_value":"bdc75493-5e8d-40b1-a1b0-a66c0113d179","case_attribute_value_label":"Yasin"}]},
            {
                "case_attribute_id": 7,
                "case_attribute_name": "description",
                "case_attribute_label": "Description",
                "data_type": "string",
                "format_type": "4",
                "group": "Case Details",
                "order": "70",
                "constraints": "1",
                "editable": "true",
                "values": []
            },
            {
                "case_attribute_id": 8,
                "case_attribute_name": "resolution_type",
                "case_attribute_label": "Resolution Type",
                "data_type": "enum",
                "format_type": "",
                "group": "Case Details",
                "order": "80",
                "constraints": "1",
                "editable": "true",
                "values": []
            },
            {
                "case_attribute_id": 9,
                "case_attribute_name": "sparq_member_id",
                "case_attribute_label": "Sparq Member ID",
                "data_type": "string",
                "format_type": "",
                "group": "Customer Information",
                "order": "180",
                "constraints": "1",
                "editable": "true",
                "values": []
            },
            {
                "case_attribute_id": 10,
                "case_attribute_name": "customer_id",
                "case_attribute_label": "Customer ID",
                "data_type": "string",
                "format_type": "",
                "group": "Customer Information",
                "order": "110",
                "constraints": "1",
                "editable": "true",
                "values": []
            },
            {
                "case_attribute_id": 11,
                "case_attribute_name": "customer_firstname",
                "case_attribute_label": "Customer FirstName",
                "data_type": "string",
                "format_type": "",
                "group": "Customer Information",
                "order": "90",
                "constraints": "1",
                "editable": "true",
                "values": []
            },
            {
                "case_attribute_id": 12,
                "case_attribute_name": "customer_lastname",
                "case_attribute_label": "Customer LastName",
                "data_type": "string",
                "format_type": "",
                "group": "Customer Information",
                "order": "100",
                "constraints": "1",
                "editable": "true",
                "values": []
            },
            {
                "case_attribute_id": 13,
                "case_attribute_name": "customer_email",
                "case_attribute_label": "Customer Email",
                "data_type": "string",
                "format_type": "",
                "group": "Customer Information",
                "order": "120",
                "constraints": "1",
                "editable": "true",
                "values": []
            },
            {
                "case_attribute_id": 14,
                "case_attribute_name": "customer_phone",
                "case_attribute_label": "Customer Phone",
                "data_type": "string",
                "format_type": "",
                "group": "Customer Information",
                "order": "130",
                "constraints": "1",
                "editable": "true",
                "values": []
            },
            {
                "case_attribute_id": 15,
                "case_attribute_name": "customer_language",
                "case_attribute_label": "Customer Language",
                "data_type": "string",
                "format_type": "",
                "group": "Customer Information",
                "order": "140",
                "constraints": "1",
                "editable": "true",
                "values": []
            },
            {
                "case_attribute_id": 16,
                "case_attribute_name": "customer_country",
                "case_attribute_label": "Customer Country",
                "data_type": "string",
                "format_type": "",
                "group": "Customer Information",
                "order": "150",
                "constraints": "1",
                "editable": "true",
                "values": []
            },
            {
                "case_attribute_id": 17,
                "case_attribute_name": "customer_tier",
                "case_attribute_label": "Customer Tier",
                "data_type": "enum",
                "format_type": "",
                "group": "Customer Information",
                "order": "160",
                "constraints": "1",
                "editable": "true",
                "values": []
            },
            {
                "case_attribute_id": 18,
                "case_attribute_name": "customer_nps",
                "case_attribute_label": "Customer NPS",
                "data_type": "double",
                "format_type": "",
                "group": "Customer Information",
                "order": "170",
                "constraints": "1",
                "editable": "true",
                "values": []
            },
            {
                "case_attribute_id": 19,
                "case_attribute_name": "closed_date",
                "case_attribute_label": "Closed Date",
                "data_type": "datetime",
                "format_type": "",
                "group": "Tracking Info",
                "order": "190",
                "constraints": "1",
                "editable": "true",
                "values": []
            },
            {
                "case_attribute_id": 20,
                "case_attribute_name": "last_updated_date",
                "case_attribute_label": "Last Updated Date",
                "data_type": "datetime",
                "format_type": "",
                "group": "Tracking Info",
                "order": "200",
                "constraints": "1",
                "editable": "true",
                "values": []
            },
            {
                "case_attribute_id": 21,
                "case_attribute_name": "archived_date",
                "case_attribute_label": "Archived Date",
                "data_type": "datetime",
                "format_type": "",
                "group": "Tracking Info",
                "order": "210",
                "constraints": "1",
                "editable": "true",
                "values": []
            },
            {
                "case_attribute_id": 22,
                "case_attribute_name": "last_updated_by",
                "case_attribute_label": "Last Updated By",
                "data_type": "string",
                "format_type": "",
                "group": "Tracking Info",
                "order": "220",
                "constraints": "1",
                "editable": "true",
                "values": []
            }
        ]
    }`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.+?\/cases\/.+?\/?$/,
      method: 'GET',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 200,
      latency: 600,
      body: `{
          "id": 7569124,
          "createdAt": "2020-09-20T12:00:00.000Z",
          "createdBy": "007",
          "values": [
            { 
              "case_attribute_id": 4,
              "case_attribute_name": "subject",
              "case_attribute_value": "Client Disatisfaction Survey",
              "case_attribute_value_label": "Client Disatisfaction Survey"
            },
            { 
              "case_attribute_id": 1,
              "case_attribute_name": "priority",
              "case_attribute_value_id": 4,
              "case_attribute_value": "critical",
              "case_attribute_value_label": "Critical"
            },
            { 
              "case_attribute_id": 2,
              "case_attribute_name": "status",
              "case_attribute_value_id": 7,
              "case_attribute_value": "escalating",
              "case_attribute_value_label": "Escalating"
            },
            { 
              "case_attribute_id": 5,
              "case_attribute_name": "due_date",
              "case_attribute_value": "2021-01-05T12:00:00.000Z",
              "case_attribute_value_label": "2021-01-05T12:00:00.000Z"
            },
            { 
              "case_attribute_id": 6,
              "case_attribute_name": "assigned_to_agent",
              "case_attribute_value_label": "Anika Westervelt",
              "case_attribute_value": "6373adbe-db3d-4cb3-99a7-a90d0189e07f"
            },
            { 
              "case_attribute_id": 7,
              "case_attribute_name": "closed_date",
              "case_attribute_value_label": "2021-10-05T12:00:00.000Z",
              "case_attribute_value": "2021-10-05T12:00:00.000Z"
            },
            { 
              "case_attribute_id": 8,
              "case_attribute_name": "archived_date",
              "case_attribute_value_label": "2021-02-05T12:00:00.000Z",
              "case_attribute_value": "2021-02-05T12:00:00.000Z"
            },
            { 
              "case_attribute_id": 9,
              "case_attribute_name": "last_updated_date",
              "case_attribute_value_label": "2021-03-05T12:00:00.000Z",
              "case_attribute_value": "2021-03-05T12:00:00.000Z"
            },
            { 
              "case_attribute_id": 10,
              "case_attribute_name": "customer_nps",
              "case_attribute_value_label": 10,
              "case_attribute_value": 10
            }
          ],
          "comments": [
            {
              "id": "1",
              "body": "hello world",
              "createdBy": "Rule Engine",
              "createdAt": "2020-12-21T21:15:32.558Z"
            }
          ]
        }`,
    },
  },
  {
    request: {
      url: /\/v1\/applications\/.+?\/cases\/.+?\/comments$/,
      method: 'PUT',
    },
    response: {
      headers: {
        'content-type': 'application/json',
        'access-control-expose-headers': 'accept-language',
      },
      status: 201,
      latency: 0,
      body: `{
        "commentId": 1
      }`,
    },
  },
];
