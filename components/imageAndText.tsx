const imageAndText = () => {
    let data = "<mjml>\n" +
        "  <mj-body>\n" +
        "    <mj-section>\n" +
        "      <mj-column>\n" +
        "        <mj-image width=\"300px\" src=\"https://www.online-image-editor.com//styles/2014/images/example_image.png\" />\n" +
        "      </mj-column>\n" +
        "      <mj-column>\n" +
        "        <mj-text font-family=\"Helvetica\" color=\"#F45E43\">\n" +
        "          <h1>Title</h1>\n" +
        "\n" +
        "          <p>Paragraph</p>\n" +
        "          <p style=\"font-family:Comic Sans Ms\">Another paragraph</p>\n" +
        "        </mj-text>\n" +
        "      </mj-column>\n" +
        "    </mj-section>\n" +
        "  </mj-body>\n" +
        "</mjml>"
    const sendData = () => {
        console.log(data)
    }

    return (
        <>
            <button onClick={sendData}>Image and Text </button>

        </>
    )

};

export default imageAndText