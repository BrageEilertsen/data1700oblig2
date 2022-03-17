function kjopeProsess() {
    const film = $("#film").val();
    const antall = $("#antall").val();
    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const tlfnr = $("#tlfnr").val();
    const epost = $("#epost").val();

    $("#film").removeClass();
    $("#antall").removeClass();
    $("#fornavn").removeClass();
    $("#etternavn").removeClass();
    $("#tlfnr").removeClass();
    $("#epost").removeClass();


    if (!film) {
        $("#film").addClass();
        return;
    }
    if (!antall) {
        $("#antall").addClass();
        return;
    }
    if (!fornavn) {
        $("#fornavn").addClass();
        return;
    }
    if (!etternavn) {
        $("#etternavn").addClass();
        return;
    }
    if (tlfnr)

        if (!epost) {
            $("#epost").addClass();
        } else {
            const billett = {
                antall: antall,
                film: film,
                fornavn: fornavn,
                etternavn: etternavn,
                tlfnr: tlfnr,
                epost: epost,
            }

            $.post("/lagreBillett", billett, function (kunde) {
                let ut = "<table class='table table-striped'>" +
                    "<tr><th>Navn</th>" +
                    "<th>Film</th>" +
                    "<th>Antall</th>" +
                    "<th>Telefonnummer</th>" +
                    "<th>Epost</th></tr>";
                for (let billett of kunde) {
                    ut += "<tr>" +
                        "   <td>" + billett.fornavn + " " + billett.etternavn + "</td>" +
                        "   <td>" + billett.film + "</td>" +
                        "   <td>" + billett.antall + "</td>" +
                        "   <td>" + billett.tlfnr + "</td>" +
                        "   <td>" + billett.epost + "</td></tr>";
                }
                ut += "</table>"

                $("#resultatUt").html(ut);
            })

            $("#film").val("");
            $("#antall").val("");
            $("#fornavn").val("");
            $("#etternavn").val("");
            $("#tlfnr").val("");
            $("#epost").val("");
        }
    else {
        $("#tlfnr").addClass();
    }

}

function tomBillett() {
    $.get("/slett", function () {
        $("#resultatUt").html("");
    })
}

