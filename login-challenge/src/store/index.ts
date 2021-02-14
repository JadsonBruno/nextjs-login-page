/**
 * TYPES
 */
import {Action} from 'redux';
import {applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import {compose} from 'redux';
import {createStore} from 'redux';
import {Middleware} from 'redux';
import {Reducer} from 'redux';
import {ReducersMapObject} from 'redux';
import {Store as IStore} from 'redux';
import {StoreEnhancer} from 'redux';
import {Unsubscribe} from 'redux';
import {IAppState} from '../aggregates/index.d';


/**
 * CODE
 */

/**
 * I am a redux store manager.
 */
class Store
{
    // define fields
    private compose: Function;
    private enhancer!: StoreEnhancer;
    private middlewares!: StoreEnhancer;
    private reducer!: Reducer;
    public store!: IStore<{}>;


    /**
     * I initialize myself.
     *
     * :returns: nothing
     */
    constructor ()
    {
        // define the enhance composer
        this.compose = compose;
    }


    /**
     * I turn an object of reducer functions into a single reducer function.
     *
     * :param reducers: reducers functions
     *
     * :returns: single reducer function
     */
    combineReducers (reducers: ReducersMapObject): Reducer
    {
        return combineReducers(reducers);
    }


    /**
     * I compose the store enhancers.
     *
     * :param enhancers: list of enhancers
     *
     * :returns: final function obtained by composing the given functions
     */
    composeEnhancers (...enhancers: StoreEnhancer[]): StoreEnhancer
    {
        return this.compose(...enhancers);
    }


    /**
     * I compose the store middlewares.
     *
     * :param middlewares: list of middleware functions
     *
     * :returns: a store enhancer applying the middleware
     */
    composeMiddlewares (middlewares: Middleware[]): StoreEnhancer
    {
        return applyMiddleware(...middlewares);
    }


    /**
     * I create a Redux store that holds the state tree.
     *
     * :param reducer: reducer function for the store
     * :param middlewares: list of middleware functions
     * :param enhancers: list of store enhancers
     *
     * :returns: created store
     */
    create (reducer: Reducer,
            middlewares?: Middleware[],
            enhancer?: StoreEnhancer): IStore
    {
        // set enhancers list
        const enhancers = [];

        // get reducer
        this.reducer = reducer;

        // middlewares available: compose them and set as enhancers
        if (middlewares !== undefined)
        {
            this.middlewares = this.composeMiddlewares(middlewares);
            enhancers.push(this.middlewares);
        }

        // enhancer available: append it to enhancers
        if (enhancer !== undefined)
        {
            enhancers.push(enhancer);
        }

        // compose enhancers
        this.enhancer = this.composeEnhancers(...enhancers);

        // create store
        this.store = createStore(this.reducer, this.enhancer);

        // return store
        return this.store;
    }


    /**
     * I am a closure to create reducer with actions map.
     *
     * :param initialState: initial state to create reducer
     * :param actionsMap: reducers as actions map
     *
     * :returns: reducer function
     */
    createReducer (initialState: object,
                   ...actionsMap: ReducersMapObject[]): Reducer
    {
        // return reducer
        return (state = initialState, action: Action): object =>
        {
            // merge reducers
            const reducers = Object.assign({}, ...actionsMap);

            // get reducer by action type
            const reducer = reducers[action.type];

            // reducer unavailable: return current state
            if (reducer === undefined)
            {
                return state;
            }

            // reducer available: return new state
            return reducer(state, action);
        };
    }


    /**
     * I dispatch an action.
     *
     * :param action: action to dispatch
     *
     * :returns: dispatched action
     */
    dispatch <A extends Action> (action: A): A
    {
        return this.store.dispatch(action);
    }


    /**
     * I read the state tree managed by the store.
     *
     * :returns: current state tree
     */
    getState (): IAppState
    {
        return this.store.getState() as IAppState;
    }


    /**
     * I replace the reducer currently used by the store.
     *
     * :param nextReducer: next reducer to set in the store
     *
     * :returns: nothing
     */
    replaceReducer (nextReducer: Reducer<{}>): void
    {
        this.store.replaceReducer(nextReducer);
    }


    /**
     * I replace all reducers currently used by the store.
     *
     * :param nextReducers: reducers map for the store
     *
     * :returns: nothing
     */
    replaceReducers (nextReducers: ReducersMapObject): void
    {
        this.replaceReducer(this.combineReducers(nextReducers));
    }


    /**
     * I add a change listener to store.
     *
     * :param listener: callback to be invoked on every dispatch
     *
     * :returns: function to remove this change listener
     */
    subscribe (listener: ()=> void): Unsubscribe
    {
        return this.store.subscribe(listener);
    }
}


/**
 * EXPORTS
 */
export default new Store();
