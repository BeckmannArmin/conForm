<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{csrf_token()}}">
        <title>conForm</title>
        <link href=" {{ mix('css/app.css') }}" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/f04c8c4f04.js" crossorigin="anonymous"></script>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <style>
        body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: none;
            -ms-text-size-adjust: none;
            background: #edf2ff;
        }
    </style>

</head>

<body marginwidth="0" marginheight="0" style="margin-top: 0; margin-bottom: 0; padding-top: 0; padding-bottom: 0; width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;" offset="0" topmargin="0" leftmargin="0">

    <table data-bgcolor="BodyBg" data-module="01-Top Space Part" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#edf2ff" align="center" class="">
        <tbody>
            <tr>
                <td valign="top" align="center">
                    <table class="main" width="800" cellspacing="0" cellpadding="0" border="0" align="center">
                        <tbody>
                            <tr>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>

    <table data-bgcolor="BodyBg" data-module="10-Service Title Part" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#edf2ff" align="center" class="">
        <tbody>
            <tr>
                <td valign="top" align="center">
                    <table class="main" width="800" cellspacing="0" cellpadding="0" border="0" align="center">
                        <tbody>
                            <tr>
                                <td valign="top" bgcolor="#FFFFFF" align="center">
                                    <table class="two-left-inner" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                                        <tbody>
                                            <tr>
                                                <td valign="top" height="50" align="center">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td valign="top" align="center">
                                                    <table class="two-left-inner" width="100%" cellspacing="0" cellpadding="0" border="0">
                                                        <tbody>
                                                          <tr>
                                                            <td>
                                                              <table width="170" cellspacing="0" cellpadding="0" border="0" align="center">
                                                                <tbody>
                                                                  <tr>
                                                                    <td><a href="#" style="text-decoration:none;"><img src="{{URL::asset('/images/conForm_logo.png')}}" alt="conform_logo" height="200" width="200"></a></multiline></td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </td>

                                                        </tr>
                                                            <tr>
                                                                <td style="font-family:'Open Sans', sans-serif, Verdana; font-size:20px; color:#3b3a3a; font-weight:bold; line-height:50px; text-transform:none;" mc:edit="fm-40" valign="top" align="center">
                                                                    <multiline>Anweisungen zum zurücksetzen deines Passwortes</multiline>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-size:5px; line-height:5px;" valign="top" height="5" align="center">&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-family:'Open Sans', sans-serif, Verdana; font-size:14px; color:#3b3a3a; font-weight:normal; line-height:24px;" mc:edit="fm-41" valign="top" align="left">
                                                                    <strong>Hi {{ ucfirst($full_name) }},</strong>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-family:'Open Sans', sans-serif, Verdana; font-size:14px; color:#3b3a3a; font-weight:normal; line-height:24px;" mc:edit="fm-41" valign="top" align="left">
                                                                    <multiline>Wir haben eine Anfrage zum Zurücksetzen Ihres Passworts erhalten. Wenn Sie die Anfrage nicht gestellt haben, ignorieren Sie einfach diese E-Mail. Andernfalls können Sie Ihr Passwort mit dem folgenden Code zurücksetzen:</multiline>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="font-size:5px; line-height:5px;" valign="top" height="15" align="center">&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                              <td>
                                                                <table  style="font-family:'Open Sans', sans-serif, Verdana; font-size:14px; color:#3b3a3a; font-weight:normal; line-height:24px;">
                                                                  <tr>
                                                                    <td>Dein Code lautet: <strong>{{ $random }}</strong></td>
                                                                  </tr>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                  <table  style="font-family:'Open Sans', sans-serif, Verdana; font-size:14px; color:#3b3a3a; font-weight:normal; line-height:24px;">
                                                                    <tr>
                                                                      <td>Beste Grüße und bleib Gesund, <br> conForm</td>
                                                                    </tr>
                                                                  </table>
                                                                </td>
                                                              </tr>
                                                            <tr>
                                                                <td style="font-size:5px; line-height:5px;" valign="top" height="15" align="center">&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td valign="top" align="center">&nbsp;</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="font-size:80px; line-height:80px;" valign="top" height="80" align="center">&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
