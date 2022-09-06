const divider = () => {
    let data = "<mjml>\n" +
        "  <mj-body>\n" +
        "    <mj-section>\n" +
        "      <mj-column>\n" +
        "        <mj-divider border-width=\"1px\" border-style=\"dashed\" border-color=\"lightgrey\" />\n" +
        "      </mj-column>\n" +
        "    </mj-section>\n" +
        "  </mj-body>\n" +
        "</mjml>"
    const sendData = () => {
        console.log(data)
    }

    return (
        <>
            <button onClick={sendData}>Divider </button>

        </>
    )

};

export default divider