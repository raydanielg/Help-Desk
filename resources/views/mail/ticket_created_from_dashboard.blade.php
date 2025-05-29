<!doctype html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Ticket mail</title>
    <style>

        .mail-body img {
            border: none;
            -ms-interpolation-mode: bicubic;
            max-width: 100%;
        }

        body {
            background-color: #f6f6f6;
        }

        .mail-body table {
            border-collapse: separate;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            width: 100%; }
        .mail-body table td {
            font-family: sans-serif;
            font-size: 14px;
            vertical-align: top;
        }
        .mail-body {
            background-color: #f6f6f6;
            width: 100%;
            font-size: 14px;
            font-family: sans-serif;
            -webkit-font-smoothing: antialiased;
            line-height: 1.4;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        .mail-body .container {
            display: block;
            margin: 0 auto !important;
            /* makes it centered */
            max-width: 580px;
            padding: 10px;
            width: 580px;
        }

        .mail-body .content {
            box-sizing: border-box;
            display: block;
            margin: 0 auto;
            max-width: 580px;
            padding: 10px;
        }

        .mail-body .main {
            background: #ffffff;
            border-radius: 3px;
            width: 100%;
        }

        .mail-body .wrapper {
            box-sizing: border-box;
            padding: 20px;
        }

        .mail-body .content-block {
            padding-bottom: 5px;
            padding-top: 5px;
        }

        .mail-body .footer {
            clear: both;
            margin-top: 10px;
            text-align: center;
            width: 100%;
        }
        .mail-body .footer td,
        .mail-body .footer p,
        .mail-body .footer span,
        .mail-body .footer a {
            color: #999999;
            font-size: 12px;
            text-align: center;
        }

        .mail-body h1,
        .mail-body h2,
        .mail-body h3,
        .mail-body h4 {
            color: #000000;
            font-family: sans-serif;
            font-weight: 400;
            line-height: 1.4;
            margin: 0;
            margin-bottom: 30px;
        }

        .mail-body h1 {
            font-size: 35px;
            font-weight: 300;
            text-align: center;
            text-transform: capitalize;
        }

        .mail-body p,
        .mail-body ul,
        .mail-body ol {
            font-family: sans-serif;
            font-size: 14px;
            font-weight: normal;
            margin: 0;
            margin-bottom: 15px;
            line-height: 1.4;
        }
        .mail-body p li,
        .mail-body ul li,
        .mail-body ol li {
            list-style-position: inside;
            margin-left: 5px;
        }

        .mail-body .btn {
            box-sizing: border-box;
            width: 100%; }
        .mail-body .btn > tbody > tr > td {
            padding-bottom: 15px; }
        .mail-body .btn table {
            width: auto;
        }
        .mail-body .btn table td {
            background-color: #ffffff;
            border-radius: 5px;
            text-align: center;
        }
        .mail-body .btn a {
            background-color: #ffffff;
            border: solid 1px #7366ff;
            border-radius: 5px;
            box-sizing: border-box;
            color: #7366ff;
            cursor: pointer;
            display: inline-block;
            font-size: 14px;
            font-weight: bold;
            margin: 0;
            padding: 6px 25px;
            text-decoration: none;
            text-transform: capitalize;
        }

        .mail-body .btn-primary table td {
            background-color: #7366ff;
        }

        .mail-body .btn-primary a {
            background-color: #7366ff;
            border-color: #7366ff;
            color: #ffffff;
        }


        .mail-body .last {
            margin-bottom: 0;
        }

        .mail-body .first {
            margin-top: 0;
        }

        .mail-body .align-center {
            text-align: center;
        }

        .mail-body .align-right {
            text-align: right;
        }

        .mail-body .align-left {
            text-align: left;
        }

        .mail-body .clear {
            clear: both;
        }

        .mail-body .mt0 {
            margin-top: 0;
        }

        .mail-body .mb0 {
            margin-bottom: 0;
        }

        .preheader {
            color: transparent;
            display: none;
            height: 0;
            max-height: 0;
            max-width: 0;
            opacity: 0;
            overflow: hidden;
            mso-hide: all;
            visibility: hidden;
            width: 0;
        }

        .mail-body .powered-by a {
            text-decoration: none;
        }

        .mail-body hr {
            border: 0;
            border-bottom: 1px solid #f6f6f6;
            margin: 20px 0;
        }

        .mail-body .main{
            background-image: url('https://res.cloudinary.com/robinbd/image/upload/v1663394450/mail-template/background-bottom.png');
            background-repeat: no-repeat;
            background-size: 100%;
            background-position: 50% 100%;
        }

        @media only screen and (max-width: 620px) {
            table.mail-body h1 {
                font-size: 28px !important;
                margin-bottom: 10px !important;
            }
            table.mail-body p,
            table.mail-body ul,
            table.mail-body ol,
            table.mail-body td,
            table.mail-body span,
            table.mail-body a {
                font-size: 16px !important;
            }
            table.mail-body .wrapper,
            table.mail-body .article {
                padding: 10px !important;
            }
            table.mail-body .content {
                padding: 0 !important;
            }
            table.mail-body .container {
                padding: 0 !important;
                width: 100% !important;
            }
            table.mail-body .main {
                border-left-width: 0 !important;
                border-radius: 0 !important;
                border-right-width: 0 !important;
            }
            table.mail-body .btn table {
                width: 100% !important;
            }
            table.mail-body .btn a {
                width: 100% !important;
            }
            table.mail-body .img-responsive {
                height: auto !important;
                max-width: 100% !important;
                width: auto !important;
            }
        }

        @media all {
            .mail-body .ExternalClass {
                width: 100%;
            }
            .mail-body .ExternalClass,
            .mail-body .ExternalClass p,
            .mail-body .ExternalClass span,
            .mail-body .ExternalClass font,
            .mail-body .ExternalClass td,
            .mail-body .ExternalClass div {
                line-height: 100%;
            }
            .mail-body .apple-link a {
                color: inherit !important;
                font-family: inherit !important;
                font-size: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
                text-decoration: none !important;
            }
            #MessageViewBody a {
                color: inherit;
                text-decoration: none;
                font-size: inherit;
                font-family: inherit;
                font-weight: inherit;
                line-height: inherit;
            }
            .mail-body .btn-primary table td:hover {
                background-color: #34495e !important;
            }
            .mail-body .btn-primary a:hover {
                background-color: #34495e !important;
                border-color: #34495e !important;
            }
        }

    </style>
</head>
<body>
<span class="preheader">Helpdesk ticket update</span>
<table role="presentation" border="0" cellpadding="0" cellspacing="0" class="mail-body">
    <tr>
        <td></td>
        <td class="container">
            <div class="content">

                <!-- START CENTERED WHITE CONTAINER -->
                <table role="presentation" class="main">

                    <!-- START MAIN CONTENT AREA -->
                    <tr>
                        <td class="header">
                            <a href="#">
                                <img style="height: 60px; width: auto; margin: 15px auto;display: block" src="https://res.cloudinary.com/robinbd/image/upload/v1663394454/mail-template/help-desk-logo.png" alt="help desk" />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td class="wrapper">

                            <table role="presentation" class="main-table" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td>
                                        <p>Hi {name},</p>
                                        <p>A new ticket has been created. You would be able to review the ticket and following up continue process from the following link.</p>
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                                            <tbody>
                                            <tr>
                                                <td><strong>Ticket number:</strong> {uid}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Subject:</strong> {subject}</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Ticket type:</strong> {type}</td>
                                            </tr>
                                            <tr>
                                                <td align="left">
                                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                                        <tbody>
                                                        <tr>
                                                            <td><a href="{url}" target="_blank">View ticket</a> </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <p>We will send you also different email regarding the ticket update but if you login on the system you would be able to discuss continue with manager regarding your ticket.</p>
                                        <p>Thank you!</p>
                                        <p>Best regards, <br/>{sender_name}</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- END MAIN CONTENT AREA -->
                </table>
                <!-- END CENTERED WHITE CONTAINER -->

                <!-- START FOOTER -->
                <div class="footer">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="content-block">
                                <span class="apple-link">HelpDesk - A online ticket support system</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="content-block powered-by">
                                © 2022 <a href="http://w3bd.com">W3BD</a> - All rights reserved.
                            </td>
                        </tr>
                    </table>
                </div>
                <!-- END FOOTER -->

            </div>
        </td>
        <td></td>
    </tr>
</table>
</body>
</html>
