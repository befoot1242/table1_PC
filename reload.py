import numpy as np
import codecs
import json

with open('results.json', 'r', encoding='utf-8') as file:
    results = json.load(file)

# out = "<!DOCTYPE html>\n"
# out += "<html lang='ja'>\n"
# out += "<table>\n"
# out += "<tbody>\n"
# out += "<tr><td>?</td><td>バサラ大将</td><td>坂本</td><td>尊敬ラーメン屋</td><td>ゆっけ</td></tr>\n"
# for ar in results:
#     row = "<tr>"
#     for td in ar:
#         row += "<td>" + str(td) + "</td>"
#     row += "</tr>\n"
#     out += row
# out += "</tbody>"
# out += "</table>\n"
# out += "</html>\n"

out = '$(document).ready(function() {\n' + '// JSONデータ\n' + 'var jsonData = [\n'
out += str(results[0])
for i in range(1,len(results)):
    out += "," + str(results[i])
out += "        // 他のデータ...\n"+"    ];\n"+"    // DataTableの初期化\n"+"    $('#example').DataTable({\n"+"        data: jsonData,\n"+"        columns: [\n"+"            { title: \"Column\" },\n"+"            { title: \"バサラ大将\" },\n"+"            { title: \"坂本\" },\n"+"            { title: \"尊敬ラーメン屋\" },\n"+"            { title: \"ゆっけ\" }\n"+"            { title: \"voter\" }\n"+"        ]\n"+"    });\n"+"});\n"


print(out)