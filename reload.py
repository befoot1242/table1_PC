import numpy as np
import codecs
import json

with open('results.json', 'r', encoding='utf-8') as file:
    results = json.load(file)

out = "<!DOCTYPE html>\n"
out += "<html lang='ja'>\n"
out += "<table>\n"
out += "<tbody>\n"
out += "<tr><td>?<td><td>バサラ大将<td><td>坂本<td><td>尊敬ラーメン屋<td><td>ゆっけ<td></tr>\n"
for ar in results:
    row = "<tr>"
    for td in ar:
        row += "<td>" + str(td) + "</td>"
    row += "</tr>\n"
    out += row
out += "</tbody>"
out += "</table>\n"
out += "</html>\n"

print(out)