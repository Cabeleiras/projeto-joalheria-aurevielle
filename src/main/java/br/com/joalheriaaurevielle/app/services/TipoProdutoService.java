package br.com.joalheriaaurevielle.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.joalheriaaurevielle.app.entities.TipoProduto;
import br.com.joalheriaaurevielle.app.repositories.TipoProdutoRepository;

@Service
public class TipoProdutoService {
    
    @Autowired
    private TipoProdutoRepository tipoProdutoRepository;
    
    public TipoProduto saveTipoProduto(TipoProduto tipoProduto) {
        return tipoProdutoRepository.save(tipoProduto);
    }
    
    public List<TipoProduto> getAllTiposProduto() {
        return tipoProdutoRepository.findAll();
    }
    
    public TipoProduto getTipoProdutoById(Long id) {
        return tipoProdutoRepository.findById(id).orElse(null);
    }
    
    public void deleteTipoProduto(Long id) {
        tipoProdutoRepository.deleteById(id);
    }
}