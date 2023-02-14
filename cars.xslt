<!-- <?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:array="http://www.w3.org/2005/xpath-functions/array"
                xmlns:map="http://www.w3.org/2005/xpath-functions/map"
                xmlns:math="http://www.w3.org/2005/xpath-functions/math"
                exclude-result-prefixes="#all"
                expand-text="yes"
                version="3.0">
  
  <xsl:output method="html" indent="yes"/>
  
  <xsl:template match="/" mode="#all">
    <html>
      <head>
        <link rel="stylesheet" href="css/styles.css"/>
      </head>
      <body>
        <table>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Model</th>
              <th>Traction type</th>
              <th>Horsepower</th>
              <th>Number of seats</th>
              <th>Abs</th>
              <th>Power steering</th>
              <th>GD</th>
              <th>Locking_differential</th>
              <th>Price</th>
              <th>Release date</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="//car">
              <tr>
                <td><xsl:value-of select="brand"/></td>
                <td><xsl:value-of select="model"/></td>
                <td><xsl:value-of select="traction"/></td>
                <td><xsl:value-of select="horsepower"/></td>
                <td><xsl:value-of select="seats"/></td>
                <td><xsl:value-of select="abs"/></td>
                <td><xsl:value-of select="power_steering"/></td>
                <td><xsl:value-of select="locking_differential"/></td>
                <td><xsl:value-of select="price"/></td>
                <td><xsl:value-of select="release_date"/></td>
                <td><xsl:value-of select="description"/></td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
  
</xsl:stylesheet> -->
