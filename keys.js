// ── TRUST STORE — Chaves ECDSA P-256 ────────────────────────────────────────
// Formato da chave pública: uncompressed point (04 + X 32B + Y 32B)
// Formato da chave privada (d): escalar big-endian hex 32B
//
// ATENÇÃO: em produção, as chaves privadas (d) NÃO devem estar no cliente.
// Este arquivo é uma prova de conceito para o TCC de Defesa Cibernética.
// ─────────────────────────────────────────────────────────────────────────────

const TRUST_STORE = {
  "01": {
    name: "ADMIN",
    role: "admin",
    roleLabel: "Administrador",
    roleDesc: "Acesso total — todas as áreas",
    // Chave privada — usada apenas pelo emissor (index.html)
    d: "366f79460024ef699a1e0263fbf90a34aa5192f7f71774e9e5ca406397912492",
    // Chave pública — usada pelo verificador (verificador.html) e pelo emissor
    pub: "04590a616ba5d36418b53b5ae694d15142892b1cbe409d09269e754655282d86a4a1134723750b7d591efd7d29001fe98f3bd65d122cd5d48b1328efb6c1cdb198"
  },
  "02": {
    name: "FINANCEIRO",
    role: "financeiro",
    roleLabel: "Financeiro",
    roleDesc: "Acesso operacional — áreas financeiras",
    d: "5a20d87917dc0331ef768452e13327eca00bd77f88021a91d013929d41e61a28",
    pub: "04e440e369f24c21142a31a12fbe7780ab3ae21705d3c73f33f15bc816842ba90013c026dbf7ed547a50552484d1dbe90d516b1d160a4240356d770c80019aaa7a"
  },
  "03": {
    name: "VISITANTE",
    role: "visitante",
    roleLabel: "Visitante",
    roleDesc: "Acesso restrito — áreas públicas apenas",
    d: "41a2907b9ec9a1af5303fc3cb0c084eeb3b8b1089adb2ffcb3feb8006d1f4fac",
    pub: "0453af5b96bd8d7c5a0fae4a2dac905a904531b9503dbcf197190322c39410cda784f93074f641bb2af5138728eb2ba93756034ac505fd4745ce28d65aaa8b4446"
  }
};
