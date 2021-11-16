package voter

import (
	"github.com/coreators/voter/x/voter/keeper"
	"github.com/coreators/voter/x/voter/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the poll
	for _, elem := range genState.PollList {
		k.SetPoll(ctx, elem)
	}

	// Set poll count
	k.SetPollCount(ctx, genState.PollCount)
	// this line is used by starport scaffolding # genesis/module/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	genesis.PollList = k.GetAllPoll(ctx)
	genesis.PollCount = k.GetPollCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
