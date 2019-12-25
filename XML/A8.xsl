<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">

    <html>
        <body>
            <h2>Assignment</h2>

            <table border = "2">
                <tr bgcolor = "#1efac7">
                    <th>Roll No</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Subject</th>
                    <th>Content</th>
                </tr>

                <xsl:for-each select="mail/email">
                <tr>
                    <td><xsl:value-of select="@roll"/></td>
                    <td><xsl:value-of select="from"/></td>
                    <td><xsl:value-of select="to"/></td>
                    <td><xsl:value-of select="subject"/></td>
                    <td><xsl:value-of select="content"/></td>
                </tr>
                </xsl:for-each>

            </table>

        </body>
    </html>

    </xsl:template>

</xsl:stylesheet>