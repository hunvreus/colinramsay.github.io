---
layout: post
status: publish
published: true
title: JSON Validity Checker
author: admin
author_login: admin
author_email: colinramsay@gmail.com
wordpress_id: 324
wordpress_url: http://www.colinramsay.co.uk/?p=324
date: !binary |-
  MjAwNi0wNi0xMiAxMjozMTowOSArMDEwMA==
date_gmt: !binary |-
  MjAwNi0wNi0xMiAxMjozMTowOSArMDEwMA==
categories:
- Web
- Ajax
tags: []
comments:
- id: 21942
  author: a
  author_email: b@c.com
  author_url: ''
  date: !binary |-
    MjAwOC0wOC0yMCAyMjowMzoyOCArMDEwMA==
  date_gmt: !binary |-
    MjAwOC0wOC0yMCAyMTowMzoyOCArMDEwMA==
  content: ! "{ \"fields\":\r\n{\r\n    \"hello\": { \"value\": \"world\" },\r\n    \"num0\":
    { \"value\": 0 },\r\n    \"num1\": { \"value\": 1 },\r\n    \"num2\": { \"value\":
    2 },\r\n    \"num3\": { \"value\": 3 },\r\n    \"num11\": { \"value\": 11 },\r\n
    \   \"num12\": { \"value\": 12 },\r\n    \"num13\": { \"value\": 13 },\r\n    \"num-1\":
    { \"value\": -1 },\r\n    \"num-2\": { \"value\": -2 },\r\n    \"num-3\": { \"value\":
    -3 },\r\n    \"numLarge\": { \"value\": 9999999999 },\r\n    \"numXLarge\": {
    \"value\": 99999999999999999999 },\r\n    \"numLargeWithComma\": { \"value\":
    \"9,999,999,999\" },\r\n    \"numDecimal\": { \"value\": 1.25 },\r\n    \"numNull\":
    {\"value\": \"something null\"},\r\n    \"num10\": { \"value\": 10 },\r\n    \"num2\":
    { \"value\": 2 },\r\n    \"oceanarray\": {\r\n        \"value\" : {\r\n            \"pacific\":
    { \"value\": \"pacific ocean\" },\r\n            \"atlantic\": { \"value\": \"atlantic
    ocean\" },\r\n            \"indian\": { \"value\": \"indian ocean\" },\r\n            \"arctic\":
    { \"value\": \"arctic ocean\" }\r\n        }\r\n    },\r\n    \"numarray\": {\r\n
    \       \"value\" : {\r\n            \"1\": { \"value\": 1 },\r\n            \"2\":
    { \"value\": 2 },\r\n            \"3\": { \"value\": 3 }\r\n         }\r\n     }\r\n}\r\n}"
- id: 23584
  author: Chris
  author_email: chris.jvc@izyn.co.nz
  author_url: ''
  date: !binary |-
    MjAwOS0wMi0wMyAwMTo1MzoxMSArMDAwMA==
  date_gmt: !binary |-
    MjAwOS0wMi0wMyAwMDo1MzoxMSArMDAwMA==
  content: ! '{"panels": [ { Name: "Post Codes", Items: [{AssetId: 7794, Name: Dairy
    Cattle Farming, AttributeName: ANZSIC code, AttributeValue: 0160} ] }, { Name:
    "Post Codes", Items: [{AssetId: 6502, Name: Postcode 4381, AttributeName: Postcode,
    AttributeValue: 4381}, {AssetId: 6503, Name: Postcode 4382, AttributeName: Postcode,
    AttributeValue: 4382}, {AssetId: 6504, Name: Postcode 4383, AttributeName: Postcode,
    AttributeValue: 4383} ] } ], "templates":[45,46],"parameters":[],"attributes":[],"calendar":[],"view":{"sortInfo":{"field":"name","direction":"ASC"},"groupby":null,"columns":[{"name":"Class","hidden":true},{"name":"name","hidden":false},{"name":"id","hidden":false},{"name":"IRI
    Average","hidden":true},{"name":"IRI Driver Wpath","hidden":true},{"name":"IRI
    Lane","hidden":true},{"name":"IRI Passenger Wpath","hidden":true},{"name":"Long
    Crack Extent","hidden":true},{"name":"Rut Depth","hidden":true},{"name":"Rut Depth
    Std-Deviation","hidden":true},{"name":"Texture Depth Wpath Sand Patch","hidden":true},{"name":"Texture
    Depth Wpath Sensor","hidden":true},{"name":"Transv Crack Extent","hidden":true},{"name":"Roughness","hidden":false},{"name":"Event
    Date","hidden":false},{"name":"TD_End","hidden":false},{"name":"TD_Start","hidden":false},{"name":"Type","hidden":false},{"name":"Status","hidden":false}]
    }}'
- id: 23800
  author: Erik
  author_email: test@testmail.com
  author_url: ''
  date: !binary |-
    MjAwOS0wMi0wNyAyMjo0Nzo1MyArMDAwMA==
  date_gmt: !binary |-
    MjAwOS0wMi0wNyAyMTo0Nzo1MyArMDAwMA==
  content: ! "{\r\n\"Main\":\"List\",\r\n\"ListItems\":[\r\n{\"ParentNodeID\":\"test1\",\"DisplayName\":\"test1\",\"InternalName\":\"test1\",\"UniqueID\":\"test1\"},\r\n{\"ParentNodeID\":\"test2\",\"DisplayName\":\"test2\",\"InternalName\":\"test2\",\"UniqueID\":\"test2\"}\r\n],\r\n\"ListItems\":[\r\n{\"ParentNodeID\":\"test3\",\"DisplayName\":\"test3\",\"InternalName\":\"test3\",\"UniqueID\":\"test3\"},{\"ParentNodeID\":\"test4\",\"DisplayName\":\"test4\",\"InternalName\":\"test4\",\"UniqueID\":\"test4\"}\r\n]\r\n}"
---
<p>This is simple I know, but I couldn't actually find an online version of it. A <a href="http://www.colinramsay.co.uk/static/json-checker/">JSON Checker</a>, just paste in your JSON string and hit the button.</p>
<p>If it's parsable then it'll let you know. If it's not, then it tells you "nope". Heads up to <a href="http://codebetter.com/blogs/jay.kimble/archive/2006/03/29/JSONAndAJAX.aspx">Jay Kimble</a> for the impetus.</p>
