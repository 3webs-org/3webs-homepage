{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }: flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = nixpkgs.legacyPackages.${system};
      package = pkgs.stdenv.mkDerivation {
        name = "3webs-homepage";
        src = ./.;
        buildInputs = [ pkgs.nodejs ];
      };
    in {
      packages.default = package;
      devShells.default = package;
    }
  );
}
