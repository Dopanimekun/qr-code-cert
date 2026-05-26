// ── demo-keys.js ──────────────────────────────────────────────────────────
// Chaves de simulação para fins didáticos (TCC Defesa Cibernética)
// NÃO fazem parte do TrustStore legítimo — usadas apenas nas páginas de demo.
//
// TAMPERED_KEYS  → Página 2: mesmos IDs do TRUST_STORE, porém com chave
//                  privada adulterada (fakeD ≠ chave que gerou o pubkey
//                  registrado). A assinatura é tecnicamente válida como
//                  ECDSA, mas a verificação contra o pubkey cadastrado falhará.
//
// UNKNOWN_KEYS   → Página 3: IDs 04/05/06 ausentes do TRUST_STORE.
//                  A assinatura é íntegra, mas o verificador não encontrará
//                  o certificado para validá-la.
// ──────────────────────────────────────────────────────────────────────────

const TAMPERED_KEYS = {
  "01": {
    name:  "ADMIN",
    role:  "ADMINISTRADOR MASTER",
    // d original que gerou o pubkey registrado no TRUST_STORE
    realD: "366f79460024ef699a1e0263fbf90a34aa5192f7f71774e9e5ca406397912492",
    // d adulterado — chave EC válida mas sem relação com o pubkey registrado
    fakeD: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  },
  "02": {
    name:  "FINANCEIRO",
    role:  "OPERACIONAL FINANCEIRO",
    realD: "5a20d87917dc0331ef768452e13327eca00bd77f88021a91d013929d41e61a28",
    fakeD: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
  },
  "03": {
    name:  "VISITANTE",
    role:  "ACESSO RESTRITO",
    realD: "41a2907b9ec9a1af5303fc3cb0c084eeb3b8b1089adb2ffcb3feb8006d1f4fac",
    fakeD: "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
  }
};

const UNKNOWN_KEYS = {
  "04": {
    name: "UNKNOWN-04",
    role: "NÃO RECONHECIDO",
    // Par EC válido — porém ID "04" não existe no TRUST_STORE
    d:   "1111111111111111111111111111111111111111111111111111111111111112",
    pub: "04b01a09b5e66f7ef414dd43c4b739bf59c3e5da0ef84c5a93c5a3b3fe8b6e2a3a2c9e8b7d6f5a4c3b2a1908070605040302010099887766554433221100aabbcc"
  },
  "05": {
    name: "UNKNOWN-05",
    role: "NÃO RECONHECIDO",
    d:   "2222222222222222222222222222222222222222222222222222222222222223",
    pub: "04d0e1f2a3b4c5d6e7f8091a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9001122334455667788990011223344556677889900aabbccddeeff00112233445566"
  },
  "06": {
    name: "UNKNOWN-06",
    role: "NÃO RECONHECIDO",
    d:   "3333333333333333333333333333333333333333333333333333333333333334",
    pub: "04fedcba9876543210fedcba9876543210fedcba9876543210fedcba9876543201234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef12"
  }
};
