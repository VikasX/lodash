define(['../internal/invokePath', '../function/restParam'], function(invokePath, restParam) {

  /**
   * The opposite of `_.method`; this method creates a function which invokes
   * the method at a given path on `object`.
   *
   * @static
   * @memberOf _
   * @category Utility
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var array = _.times(3, _.constant),
   *     object = { 'a': array, 'b': array, 'c': array };
   *
   * _.map(['a[2]', 'c[0]'], _.methodOf(object));
   * // => [2, 0]
   *
   * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
   * // => [2, 0]
   */
  var methodOf = restParam(function(object, args) {
    return function(path) {
      return invokePath(object, path, args);
    };
  });

  return methodOf;
});
