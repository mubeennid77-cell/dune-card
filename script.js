<script>
function saveContact() {
const vcard =
`BEGIN:VCARD
VERSION:3.0
FN:NAMRAZ P.N
ORG:DUNE TRADING AND CONTRACTING
TITLE:CEO
TEL;TYPE=CELL:+97433221297
EMAIL:namraz.nazer@dunetraders.com
URL:https://www.dunetraders.com
ADR:;;Building No.15, Zone 14, Street 339, Doha-Qatar;Doha;;;Qatar
END:VCARD`;

const blob = new Blob([vcard], { type: 'text/vcard' });
const url = URL.createObjectURL(blob);

const a = document.createElement('a');
a.href = url;
a.download = 'NAMRAZ-PN.vcf';
document.body.appendChild(a);
a.click();
document.body.removeChild(a);

URL.revokeObjectURL(url);
}
</script>
