<script>
    export let name;
    export let pfp;
    export let desc;
</script>

<main>
    <div id="creditcardwhooooo">
    <img src={pfp} alt="pfp">
    <h2>{name}</h2>
    <p>{desc}</p>
    </div>
</main>

<style>
    #creditcardwhooooo {
        width: 175px;
        height: 250px;
        border: none;
        border-radius: 3px;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
        text-align: center;
        padding: 15px;
        background-color: #38383B;
        margin: 20px;
    }
    img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        margin-bottom: 10px;
    }
    h2 {
        font-size: 18px;
        margin: 10px 0 5px 0;
        color: white;
        font-family: 'Courier New', Courier, monospace;
    }
    p {
        font-size: 14px;
        color: white;
    }
</style>