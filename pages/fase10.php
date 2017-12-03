<?php
  require_once("cabecalho.php");
?>
    <div class="col-md-12 text-center">
      <div class="col-md-6">
        <h1 id="titulo">Forca</h1>
      </div>  
    </div>      

    <div class="col-md-12 text-center">  
      <div class="col-md-6">  
        <div class="col-md-12" id="letrasPosicionadas">
          <span id="palavraSelecionada">palavra selecionada</span>
        </div>
        
        <div class="col-md-6 text-left">
          <h3>Letras:    <span id="numLetras">  0</span></h3>
          <h3>acertos:  <span id="numAcertos">  0</span></h3>
        </div>
        <div class="col-md-6">
          <h3>Nível:      <span id="numNivel">  10</span><span> - Difícil</span></h3>
          <h3>Erros:      <span id="numErros">  0</span></h3>
        </div>

        <div class="col-md-12">
          <h2>Dica sobre a palavra</h2>
          <h2 class="dica" id="dicaSelecionada">dica selecionada</h2>
        </div>

      </div>

      <div class="col-md-6">
        <img class="imagemForca" src="../images/forca.gif">
        <img class="imagemboneco" id="imagem" src="../images/boneco.png">
      </div>
    </div>

    <div class="col-md-12 text-center">
      <div class="col-md-1">
        <h3 class="textAlign">Letra: </h3>
      </div>
      <div class="col-md-4">
        <input name="LetraEscolhida" type="text" class="form-control" id="campo"  placeholder="Escolha a letra!"/>
      </div>
    </div>

    <script src="../js/jogoDificil.js"></script> 
  </body>
</html>