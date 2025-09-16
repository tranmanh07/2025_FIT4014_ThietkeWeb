<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Bảng điểm</title>
<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th, td {
    border: 1px solid black;
    text-align: center;
    padding: 5px 10px;
  }
  th {
    font-weight: bold;
  }
</style>
</head>
<body>

<table>
  <tr>
    <th rowspan="2">Student</th>
    <th colspan="5">Exam</th>
    <th colspan="5">2nd Exam</th>
    <th rowspan="2">Final Grade</th>
  </tr>
  <tr>
    <th colspan="3">Exam</th>
    <th rowspan="2">Grade</th>
    <th>Q1</th>
    <th>Q2</th>
    <th>Q3</th>
    <th rowspan="2">Grade</th>
    <th>NR</th>
    <th>R</th>
  </tr>
  <tr>
    <th>Code</th>
    <th>Name</th>
    <th>Q1</th>
    <th>Q2</th>
    <th>Q3</th>
    <th> </th> <!-- Grade for Exam -->
    <th>Q1</th>
    <th>Q2</th>
    <th>Q3</th>
    <th> </th> <!-- Grade for 2nd Exam -->
    <th>NR</th>
    <th>R</th>
  </tr>
  <tr>
    <td>80549061</td>
    <td>John</td>
    <td>8</td>
    <td>7</td>
    <td>5</td>
    <td>17.6</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td>18</td>
    <td>17.6</td>
    <td>18</td>
  </tr>
  <tr>
    <td>80549062</td>
    <td>Mary</td>
    <td>70%</td>
    <td>100%</td>
    <td>100%</td>
    <td>6.8</td>
    <td>100%</td>
    <td>100%</td>
    <td>50%</td>
    <td>16.5</td>
    <td>16.5</td>
    <td>17</td>
  </tr>
  <tr>
    <td>80549063</td>
    <td>Claire</td>
    <td>10%</td>
    <td>50%</td>
    <td>50%</td>
    <td></td>
    <td>50%</td>
    <td>50%</td>
    <td>50%</td>
    <td>10.0</td>
    <td>10.0</td>
    <td>10</td>
  </tr>
</table>

</body>
</html>
