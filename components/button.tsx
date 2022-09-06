const button = () => {
    let data = "<mjml>\n" +
        "  <mj-body>\n" +
        "    <mj-section>\n" +
        "      <mj-column>\n" +
        "        <mj-button font-family=\"Helvetica\" background-color=\"#f45e43\" color=\"white\">\n" +
        "          Don't click me!\n" +
        "         </mj-button>\n" +
        "      </mj-column>\n" +
        "    </mj-section>\n" +
        "  </mj-body>\n" +
        "</mjml>"
    const sendData = () => {
        console.log(data)
    }

    return (
        <>
            <button onClick={sendData}>Button </button>

        </>
    )

};

export default button